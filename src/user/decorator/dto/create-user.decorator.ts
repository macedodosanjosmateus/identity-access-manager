import { applyDecorators } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsEmail, MaxLength, IsOptional } from 'class-validator'

export function CreateUserEmail() {
  return applyDecorators(
    ApiProperty({
      description: 'user email',
      example: 'user@email.com'
    }),
    IsNotEmpty(),
    IsEmail(),
    MaxLength(255)
  )
}

export function CreateUserMobile() {
  return applyDecorators(
    ApiProperty({
      description: 'user mobile phone',
      example: '+5511999999999',
      required: false
    }),
    IsOptional(),
    MaxLength(20)
  )
}
