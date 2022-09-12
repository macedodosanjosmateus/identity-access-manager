import { TUserData } from '@/user/contract/user.type'
import { CreateUserEmail, CreateUserMobile } from '@/user/decorator/dto/create-user.decorator'

export class CreateUserDto implements TUserData {
  @CreateUserEmail()
  email: string

  @CreateUserMobile()
  mobile: string
}
