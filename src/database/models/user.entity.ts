import { TUserData } from '@/user/contract/user.type'
import { BaseEntity } from '@/database/models/base.entity'
import { Column, Entity } from 'typeorm'

@Entity()
export class UserEntity extends BaseEntity implements TUserData {
  @Column({
    unique: true,
    type: 'varchar',
    length: 255
  })
  email: string

  @Column({
    unique: true,
    type: 'varchar',
    length: 20,
    nullable: true
  })
  mobile: string
}
