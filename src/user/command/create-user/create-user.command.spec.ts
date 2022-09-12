import { UserMock } from '@/test/mock/user/user.mock'
import { CreateUserCommand } from '@/user/command/create-user/create-user.command'
import { CreateUserDto } from '@/user/dto/create-user.dto'
import { plainToInstance } from 'class-transformer'

describe('CreateUserCommand', () => {
  let createUserCommand: CreateUserCommand
  let mocker: UserMock
  let data: CreateUserDto
  it('should create user command with correct data', () => {
    mocker = new UserMock()
    data = plainToInstance(CreateUserDto, mocker.createUserData())
    createUserCommand = new CreateUserCommand(data)
    expect(createUserCommand).toBeDefined()
    expect(createUserCommand.data).toEqual(data)
  })
})
