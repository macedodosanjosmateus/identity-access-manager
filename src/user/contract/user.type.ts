import { UserEntity } from '@/database/models/user.entity'

export type TUserData = {
  email: string
  mobile: string
}

export type TUserDataPartial = Partial<TUserData>

export type TUser = Omit<UserEntity, 'deletedAt' | 'version'>
