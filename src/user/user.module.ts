import { UserEntity } from '@/database/models/user.entity'
import { CreateUserHandler } from '@/user/command/create-user/create-user.handler'
import { UserController } from '@/user/controller/user.controller'
import { UserCreatedHandler } from '@/user/event/user-created/user-created.handler'
import { UserRepository } from '@/user/repository/user.repository'
import { UserService } from '@/user/service/user.service'
import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'

export const CommandHandlers = [CreateUserHandler]
export const EventHandlers = [UserCreatedHandler]

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [...CommandHandlers, ...EventHandlers, UserRepository, UserService]
})
export class UserModule {}
