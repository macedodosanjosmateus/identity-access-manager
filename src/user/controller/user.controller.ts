import { TUser } from '@/user/contract/user.type'
import {
  Create,
  FindAll,
  UserController as UserControllerDecorator
} from '@/user/decorator/controller/user-controller.decorator'
import { CreateUserDto } from '@/user/dto/create-user.dto'
import { UserService } from '@/user/service/user.service'
import { Body } from '@nestjs/common'

@UserControllerDecorator()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Create()
  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    await this.userService.createUser(createUserDto)
  }

  @FindAll()
  async findAll(): Promise<TUser[]> {
    return this.userService.findAllUsers()
  }
}
