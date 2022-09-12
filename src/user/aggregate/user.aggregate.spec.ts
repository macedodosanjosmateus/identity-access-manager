import { UserEntity } from '@/database/models/user.entity'
import { UserMock } from '@/test/mock/user/user.mock'
import { UserAggregate } from '@/user/aggregate/user.aggregate'
import { TUserData } from '@/user/contract/user.type'
import { UserCreatedEvent } from '@/user/event/user-created/user-created.event'

describe('UserAggregate', () => {
  let userAggregate: UserAggregate
  let userEntity: UserEntity
  let userData: TUserData
  let mocker: UserMock
  describe('create', () => {
    it('should create and apply a user created event', () => {
      mocker = new UserMock()
      userAggregate = new UserAggregate(undefined)
      userData = mocker.createUserData()
      const spy = jest.spyOn(userAggregate, 'apply')
      userAggregate.create(userData)
      expect(spy).toBeCalledWith(new UserCreatedEvent(userData))
      expect(spy).toBeCalledTimes(1)
    })
  })

  describe('getFormattedData', () => {
    it('should get formatted data from with corrected values', () => {
      mocker = new UserMock()
      userData = mocker.createUserData()
      userEntity = mocker.createUserEntity(userData)
      userAggregate = new UserAggregate(userEntity)
      expect(userAggregate.getFormattedData()).toEqual({
        id: userEntity.id,
        email: userEntity.email,
        mobile: userEntity.mobile,
        createdAt: userEntity.createdAt,
        updatedAt: userEntity.updatedAt
      })
    })
  })
})
