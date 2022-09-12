import { TUserData } from '@/user/contract/user.type'

export class UserCreatedEvent {
  constructor(public readonly data: TUserData) {}
}
