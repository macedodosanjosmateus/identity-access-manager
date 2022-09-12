import { UserEntity } from '@/database/models/user.entity'
import { TUser, TUserData } from '@/user/contract/user.type'
import { UserCreatedEvent } from '@/user/event/user-created/user-created.event'
import { AggregateRoot } from '@nestjs/cqrs'

export class UserAggregate extends AggregateRoot {
  constructor(private readonly user: UserEntity | undefined) {
    super()
  }

  getFormattedData(): TUser {
    if (!this.user) {
      throw new Error('User is not defined')
    }
    return {
      id: this.user.id,
      email: this.user.email,
      mobile: this.user.mobile,
      createdAt: this.user.createdAt,
      updatedAt: this.user.updatedAt
    }
  }

  async create(data: TUserData): Promise<void> {
    this.apply(new UserCreatedEvent(data))
  }
}
