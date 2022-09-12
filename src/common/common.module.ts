import { HealthController } from '@/common/controller/health.controller'
import { HealthService } from '@/common/service/health.service'
import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'

@Module({
  imports: [HttpModule, TerminusModule],
  controllers: [HealthController],
  providers: [HealthService]
})
export class CommonModule {}
