import { sqlConfig } from '@/config/sql.config'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    ConfigModule.forFeature(sqlConfig()),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get<string>('sql.host'),
          port: configService.get<number>('sql.port'),
          username: configService.get<string>('sql.username'),
          password: configService.get<string>('sql.password'),
          database: configService.get<string>('sql.database'),
          entities: [],
          synchronize: configService.get<boolean>('sql.synchronize')
        }
      }
    })
  ]
})
export class DatabaseModule {}
