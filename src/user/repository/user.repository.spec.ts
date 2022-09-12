import { UserEntity } from '@/database/models/user.entity'
import { UserMock } from '@/test/mock/user/user.mock'
import { UserAggregate } from '@/user/aggregate/user.aggregate'
import { TUserData } from '@/user/contract/user.type'
import { UserRepository } from '@/user/repository/user.repository'
import { Test } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import mock from 'jest-mock-extended/lib/Mock'
import { Repository } from 'typeorm'

describe('UserRepository', () => {
  let userRepository: UserRepository
  let repository: Repository<UserEntity>
  let userData: TUserData
  let mocker: UserMock
  beforeEach(async () => {
    jest.clearAllMocks()
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [
        {
          provide: getRepositoryToken(UserEntity),
          useValue: mock<Repository<UserEntity>>()
        },
        UserRepository
      ]
    }).compile()

    userRepository = moduleRef.get<UserRepository>(UserRepository)
    repository = moduleRef.get<Repository<UserEntity>>(getRepositoryToken(UserEntity))
    mocker = new UserMock()
  })

  it('should be defined', () => {
    expect(userRepository).toBeDefined()
    expect(repository).toBeDefined()
  })
  describe('createUser', () => {
    it('should create a user entity and wrapper on user aggregator', async () => {
      userData = mocker.createUserData()
      const result = await userRepository.createUser(userData)
      expect(repository.save).toHaveBeenCalledTimes(1)
      expect(repository.save).toHaveBeenCalledWith(expect.any(UserEntity))
      expect(result).toBeInstanceOf(UserAggregate)
      expect(result['user']).toBeInstanceOf(UserEntity)
      expect(result['user'].email).toEqual(userData.email)
      expect(result['user'].mobile).toEqual(userData.mobile)
    })
  })
})