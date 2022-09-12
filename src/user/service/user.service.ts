import { CreateUserCommand } from '@/user/command/create-user/create-user.command'
import { TUserData } from '@/user/contract/user.type'
import { Injectable } from '@nestjs/common'
import { CommandBus, QueryBus } from '@nestjs/cqrs'

@Injectable()
export class UserService {
  public constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  async createUser(data: TUserData): Promise<void> {
    await this.commandBus.execute(new CreateUserCommand(data))
  }
}
