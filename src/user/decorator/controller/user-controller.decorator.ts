import { CreateUserDto } from '@/user/dto/create-user.dto'
import { applyDecorators, Controller, Get, Post } from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger'

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

export function FindAll() {
  return applyDecorators(
    Get(),
    ApiOkResponse({
      description: 'The records has been successfully recovered.'
    }),
    ApiNotFoundResponse({
      description: 'The records is empty.'
    })
  )
}
