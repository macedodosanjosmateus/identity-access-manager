import { TUserData } from '@/user/contract/user.type'

export class UserMock {
  createUserData(): TUserData {
    return {
      email: 'dummy@email.com',
      mobile: '+5511999999999'
    }
  }
}
