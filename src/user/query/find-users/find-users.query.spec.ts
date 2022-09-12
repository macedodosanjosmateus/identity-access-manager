import { FindUsersQuery } from '@/user/query/find-users/find-users.query'

describe('FindUsersQuery', () => {
  let findUsersQuery: FindUsersQuery

  it('should be defined', () => {
    findUsersQuery = new FindUsersQuery()
    expect(findUsersQuery).toBeDefined()
  })
})
