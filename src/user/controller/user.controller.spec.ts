import { TUserData } from '@/user/contract/user.type'
import { UserController } from '@/user/controller/user.controller'
import { CreateUserDto } from '@/user/dto/create-user.dto'
import { UserService } from '@/user/service/user.service'
import { Test, TestingModule } from '@nestjs/testing'
import { plainToInstance } from 'class-transformer'

describe('UserController', () => {
  let controller: UserController
  let service: UserService

  beforeEach(async () => {
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
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
    expect(service).toBeDefined()
  })
  describe('create', () => {
    it('should call service create user correctly', async () => {
      const createUserDto = plainToInstance(CreateUserDto, {
        email: 'dummy@email.com',
        mobile: '+5511999999999'
      } as TUserData)
      await controller.create(createUserDto)
      expect(service.createUser).toBeCalledWith(createUserDto)
      expect(service.createUser).toBeCalledTimes(1)
    })
    it('should throw a error with service throws', async () => {
      const createUserDto = plainToInstance(CreateUserDto, {
        email: 'dummy@email.com',
        mobile: '+5511999999999'
      } as TUserData)
      service.createUser = jest.fn().mockRejectedValue(new Error('error'))
      await expect(controller.create(createUserDto)).rejects.toThrowError('error')
    })
  })
})
