import { UserEntity } from '@/database/models/user.entity'
import { TUserData } from '@/user/contract/user.type'
import { UserCreatedEvent } from '@/user/event/user-created/user-created.event'
import { AggregateRoot } from '@nestjs/cqrs'

export class UserAggregate extends AggregateRoot {
  constructor(private readonly user: UserEntity | undefined) {
    super()
  }

  create(data: TUserData) {
    this.apply(new UserCreatedEvent(data))
  }
}
