import { UserController } from '@/user/controller/user.controller'
import { UserService } from '@/user/service/user.service'
import { Module } from '@nestjs/common'

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
