import { UserController } from '@/user/controller/user.controller'
import { CreateUserDto } from '@/user/dto/create-user.dto'
import { UserMock } from '@/test/mock/user/user.mock'
import { UserService } from '@/user/service/user.service'
import { Test, TestingModule } from '@nestjs/testing'
import { plainToInstance } from 'class-transformer'

describe('UserController', () => {
  let mocker: UserMock
  let controller: UserController
  let service: UserService
  let createDto: CreateUserDto
  beforeEach(async () => {
    jest.clearAllMocks()
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      controllers: [UserController]
    })
      .overrideProvider(UserService)
      .useValue({
        createUser: jest.fn().mockResolvedValue(undefined)
      })
      .compile()

    controller = module.get<UserController>(UserController)
    service = module.get<UserService>(UserService)
    mocker = new UserMock()
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
    expect(service).toBeDefined()
  })
  describe('create', () => {
    it('should call service create user correctly', async () => {
      createDto = plainToInstance(CreateUserDto, mocker.createUserData())
      await controller.create(createDto)
      expect(service.createUser).toBeCalledWith(createDto)
      expect(service.createUser).toBeCalledTimes(1)
    })
    it('should throw a error with service throws', async () => {
      createDto = plainToInstance(CreateUserDto, mocker.createUserData())
      service.createUser = jest.fn().mockRejectedValue(new Error('error'))
      await expect(controller.create(createDto)).rejects.toThrowError('error')
    })
  })

  describe('findAll', () => {
    it('should call service find all users correctly', async () => {
      service.findAllUsers = jest.fn().mockResolvedValueOnce([])
      await controller.findAll()
      expect(service.findAllUsers).toBeCalledWith()
      expect(service.findAllUsers).toBeCalledTimes(1)
    })
    it('should throw a error when service find all users throws', async () => {
      service.findAllUsers = jest.fn().mockRejectedValue(new Error('error'))
      await expect(controller.findAll()).rejects.toThrowError('error')
    })
  })
})
