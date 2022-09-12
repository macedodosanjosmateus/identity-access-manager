import { CreateUserCommand } from '@/user/command/create-user/create-user.command'
import { TUser, TUserData } from '@/user/contract/user.type'
import { FindUsersQuery } from '@/user/query/find-users/find-users.query'
import { Injectable } from '@nestjs/common'
import { CommandBus, QueryBus } from '@nestjs/cqrs'

@Injectable()
export class UserService {
  public constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  async createUser(data: TUserData): Promise<void> {
    await this.commandBus.execute(new CreateUserCommand(data))
  }

  async findAllUsers(): Promise<TUser[]> {
    return this.queryBus.execute(new FindUsersQuery())
  }
}
