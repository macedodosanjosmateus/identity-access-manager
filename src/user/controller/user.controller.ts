import { CreateUserDto } from '@/user/dto/create-user.dto'
import { UserService } from '@/user/service/user.service'
import { Body, Controller } from '@nestjs/common'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    await this.userService.createUser(createUserDto)
  }
}
