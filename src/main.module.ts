import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CommonModule } from '@/common/common.module'
import { appConfig } from '@/config/app.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      envFilePath: '.env',
      expandVariables: process.env.NODE_ENV !== 'production',
      cache: true
    }),
    ConfigModule.forFeature(appConfig()),
    CommonModule
  ]
})
export class MainModule {}
