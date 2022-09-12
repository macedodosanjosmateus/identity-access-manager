import { UserCreatedEvent } from '@/user/event/user-created/user-created.event'
import { UserCreatedHandler } from '@/user/event/user-created/user-created.handler'
import { UserRepository } from '@/user/repository/user.repository'
import mock from 'jest-mock-extended/lib/Mock'

describe('UserCreatedHandler', () => {
  let userCreatedEvent: UserCreatedEvent
  let userCreatedHandler: UserCreatedHandler
  let userRepository: UserRepository
  it('should be defined', () => {
    userRepository = mock<UserRepository>()
    userCreatedHandler = new UserCreatedHandler(userRepository)
    expect(userCreatedHandler).toBeDefined()
  })
  describe('handle', () => {
    it('should call user repository correctly', async () => {
      userCreatedEvent = mock<UserCreatedEvent>({
        data: undefined
      })
      userRepository = mock<UserRepository>({
        createUser: jest.fn().mockResolvedValue(undefined)
      })
      userCreatedHandler = new UserCreatedHandler(userRepository)
      await userCreatedHandler.handle(userCreatedEvent)
      expect(userRepository.createUser).toBeCalledWith(userCreatedEvent.data)
      expect(userRepository.createUser).toBeCalledTimes(1)
    })
  })
})
