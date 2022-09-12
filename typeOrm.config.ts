import { DataSource } from 'typeorm'
import { ConfigService } from '@nestjs/config'
import { config } from 'dotenv'
import { UserEntity } from '@/database/models/user.entity'

config()

const configService = new ConfigService()

export default new DataSource({
  type: 'mysql',
  host: configService.get('SQL_DB_HOST'),
  port: configService.get('SQL_DB_PORT'),
  username: configService.get('SQL_DB_USERNAME'),
  password: configService.get('SQL_DB_PASSWORD'),
  database: configService.get('SQL_DATABASE'),
  entities: [UserEntity],
  migrations: ['src/database/migrations/*.ts']
})
