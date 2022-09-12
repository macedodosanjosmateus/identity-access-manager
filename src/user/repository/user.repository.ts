import { UserEntity } from '@/database/models/user.entity'
import { UserAggregate } from '@/user/aggregate/user.aggregate'
import { TUserData } from '@/user/contract/user.type'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>) {}

  async createUser(data: TUserData): Promise<UserAggregate> {
    const userEntity = new UserEntity()
    userEntity.email = data.email
    userEntity.mobile = data.mobile
    await this.repository.save(userEntity)
    return new UserAggregate(userEntity)
  }
}
