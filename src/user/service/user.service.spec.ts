import { UserMock } from '@/test/mock/user/user.mock'
import { CreateUserCommand } from '@/user/command/create-user/create-user.command'
import { UserService } from '@/user/service/user.service'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { Test, TestingModule } from '@nestjs/testing'

describe('UserService', () => {
  let service: UserService
  let commandBus: CommandBus
  let queryBus: QueryBus
  let mocker: UserMock
  beforeEach(async () => {
    jest.clearAllMocks()
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CommandBus,
          useValue: {
            execute: jest.fn()
          }
        },
        {
          provide: QueryBus,
          useValue: {
            execute: jest.fn()
          }
        },
        UserService
      ]
    }).compile()

    service = module.get<UserService>(UserService)
    commandBus = module.get<CommandBus>(CommandBus)
    queryBus = module.get<QueryBus>(QueryBus)
    mocker = new UserMock()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
    expect(commandBus).toBeDefined()
    expect(queryBus).toBeDefined()
  })

  describe('create', () => {
    it('should create and execute a create user command', async () => {
      const data = mocker.createUserData()
      await service.createUser(data)
      expect(commandBus.execute).toBeCalledWith(new CreateUserCommand(data))
      expect(commandBus.execute).toBeCalledTimes(1)
    })
    it('should throw a error if command bus throws', async () => {
      const data = mocker.createUserData()
      commandBus.execute = jest.fn().mockRejectedValue(new Error('error'))
      await expect(service.createUser(data)).rejects.toThrowError('error')
    })
  })
})
