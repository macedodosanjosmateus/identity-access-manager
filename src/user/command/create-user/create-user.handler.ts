import { UserAggregate } from '@/user/aggregate/user.aggregate'
import { CreateUserCommand } from '@/user/command/create-user/create-user.command'
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs'

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: CreateUserCommand): Promise<void> {
    const user = this.publisher.mergeObjectContext(new UserAggregate(undefined))
    user.create(command.data)
    user.commit()
  }
}
