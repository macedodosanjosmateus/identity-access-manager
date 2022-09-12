import { UserEntity } from '@/database/models/user.entity'
import { UserMock } from '@/test/mock/user/user.mock'
import { UserAggregate } from '@/user/aggregate/user.aggregate'
import { TUser, TUserData } from '@/user/contract/user.type'
import { FindUsersHandler } from '@/user/query/find-users/find-users.handler'
import { UserRepository } from '@/user/repository/user.repository'
import { mock } from 'jest-mock-extended'

describe('FindUsersHandler', () => {
  let userRepository: UserRepository
  let findUsersHandler: FindUsersHandler
  let userAggregate: UserAggregate
  let userEntity: UserEntity
  let userData: TUserData
  let mocker: UserMock
  it('should be defined', () => {
    userRepository = mock<UserRepository>()
    findUsersHandler = new FindUsersHandler(userRepository)
    expect(findUsersHandler).toBeDefined()
  })
  describe('execute', () => {
    it('should execute a find users query', async () => {
      mocker = new UserMock()
      userData = mocker.createUserData()
      userEntity = mocker.createUserEntity(userData)
      userAggregate = new UserAggregate(userEntity)
      userRepository = mock<UserRepository>({
        findAllUsers: jest.fn().mockResolvedValue([userAggregate])
      })
      const expectedResult: TUser = {
        email: userEntity.email,
        mobile: userEntity.mobile,
        id: userEntity.id,
        createdAt: userEntity.createdAt,
        updatedAt: userEntity.updatedAt
      }
      findUsersHandler = new FindUsersHandler(userRepository)
      const result = await findUsersHandler.execute()
      expect(userRepository.findAllUsers).toBeCalledWith()
      expect(userRepository.findAllUsers).toBeCalledTimes(1)
      expect(result).toEqual([expectedResult])
    })
    it('should a throw error if repository throws', async () => {
      userRepository = mock<UserRepository>({
        findAllUsers: jest.fn().mockRejectedValue(new Error('error'))
      })
      findUsersHandler = new FindUsersHandler(userRepository)
      await expect(findUsersHandler.execute()).rejects.toThrowError('error')
    })
  })
})
