import { UserCreatedEvent } from '@/user/event/user-created/user-created.event'
import { UserRepository } from '@/user/repository/user.repository'
import { EventsHandler, IEventHandler } from '@nestjs/cqrs'

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  constructor(private readonly repository: UserRepository) {}

  async handle(event: UserCreatedEvent): Promise<void> {
    await this.repository.createUser(event.data)
  }
}
