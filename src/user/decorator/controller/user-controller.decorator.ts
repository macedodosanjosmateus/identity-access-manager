import { CreateUserDto } from '@/user/dto/create-user.dto'
import { applyDecorators, Controller, Post } from '@nestjs/common'
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger'

export function UserController() {
  return applyDecorators(ApiTags('Users'), Controller('user'))
}

export function Create() {
  return applyDecorators(
    Post(),
    ApiBody({ type: CreateUserDto }),
    ApiCreatedResponse({
      description: 'The record has been successfully created.'
    }),
    ApiBadRequestResponse({
      description: 'Invalid data supplied.'
    })
  )
}
