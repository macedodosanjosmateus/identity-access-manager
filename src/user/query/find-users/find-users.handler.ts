import { TUser } from '@/user/contract/user.type'
import { FindUsersQuery } from '@/user/query/find-users/find-users.query'
import { UserRepository } from '@/user/repository/user.repository'
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'

@QueryHandler(FindUsersQuery)
export class FindUsersHandler implements IQueryHandler<FindUsersQuery> {
  constructor(private readonly repository: UserRepository) {}
  async execute(): Promise<TUser[]> {
    const users = await this.repository.findAllUsers()
    return users.map((user) => user.getFormattedData())
  }
}
