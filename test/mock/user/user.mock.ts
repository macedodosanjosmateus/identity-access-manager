import { UserEntity } from '@/database/models/user.entity'
import { UserAggregate } from '@/user/aggregate/user.aggregate'
import { TUserData } from '@/user/contract/user.type'

export class UserMock {
  createUserData(): TUserData {
    return {
      email: 'dummy@email.com',
      mobile: '+5511999999999'
    }
  }

  createUserEntity(data: TUserData): UserEntity {
    const userEntity = new UserEntity()
    userEntity.id = 'dummy-id'
    userEntity.email = data.email
    userEntity.mobile = data.mobile
    userEntity.createdAt = new Date()
    userEntity.updatedAt = new Date()
    return userEntity
  }

  createUserAggregate(data: UserEntity): UserAggregate {
    return new UserAggregate(data)
  }
}
