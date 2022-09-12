import { TUser } from '@/user/contract/user.type'
import { ApiProperty } from '@nestjs/swagger'

export class UserDto implements TUser {
  @ApiProperty({
    description: 'user id',
    example: '724e4153-a467-45df-9853-c04d528f3aef'
  })
  id: string

  @ApiProperty({
    description: 'user email',
    example: 'user@email.com'
  })
  email: string

  @ApiProperty({
    description: 'user mobile',
    example: '+5511999999999'
  })
  mobile: string

  @ApiProperty({
    description: 'user created at',
    example: '2021-09-01T00:00:00.000Z'
  })
  createdAt: Date

  @ApiProperty({
    description: 'user updated at',
    example: '2021-09-01T00:00:00.000Z'
  })
  updatedAt: Date
}
