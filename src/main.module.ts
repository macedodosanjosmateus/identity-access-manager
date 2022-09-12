import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CommonModule } from '@/common/common.module'
import { appConfig } from '@/config/app.config'
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      envFilePath: '.env',
      expandVariables: process.env.NODE_ENV !== 'production',
      cache: true
    }),
    ConfigModule.forFeature(appConfig()),
    CommonModule,
    DatabaseModule
  ]
})
export class MainModule {}
