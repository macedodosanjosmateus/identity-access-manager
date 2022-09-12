import { TUserData } from '@/user/contract/user.type'
import { ICommand } from '@nestjs/cqrs'

export class CreateUserCommand implements ICommand {
  constructor(public readonly data: TUserData) {}
}
