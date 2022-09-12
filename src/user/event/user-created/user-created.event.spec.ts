import { UserMock } from '@/test/mock/user/user.mock'
import { TUserData } from '@/user/contract/user.type'
import { UserCreatedEvent } from '@/user/event/user-created/user-created.event'

describe('UserCreatedEvent', () => {
  let userCreatedEvent: UserCreatedEvent
  let userData: TUserData
  let mocker: UserMock
  it('should create a user created event with correct data', () => {
    mocker = new UserMock()
    userData = mocker.createUserData()
    userCreatedEvent = new UserCreatedEvent(userData)
    expect(userCreatedEvent).toBeDefined()
    expect(userCreatedEvent.data).toEqual(userData)
  })
})
