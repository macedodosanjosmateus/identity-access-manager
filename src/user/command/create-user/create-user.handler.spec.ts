import { UserAggregate } from '@/user/aggregate/user.aggregate'
import { CreateUserCommand } from '@/user/command/create-user/create-user.command'
import { CreateUserHandler } from '@/user/command/create-user/create-user.handler'
import { EventPublisher } from '@nestjs/cqrs'
import mock from 'jest-mock-extended/lib/Mock'

describe('CreateUserHandler', () => {
  let createUserCommand: CreateUserCommand
  let createUserHandler: CreateUserHandler
  let eventPublisher: EventPublisher
  let userAggregate: UserAggregate
  it('should be defined', () => {
    eventPublisher = mock<EventPublisher>()
    createUserHandler = new CreateUserHandler(eventPublisher)
    expect(createUserHandler).toBeDefined()
  })
  describe('execute', () => {
    it('should execute a create user command handler correctly', async () => {
      userAggregate = mock<UserAggregate>({
        create: jest.fn(),
        commit: jest.fn()
      })
      eventPublisher = mock<EventPublisher>({
        mergeObjectContext: jest.fn().mockReturnValue(userAggregate)
      })
      createUserHandler = new CreateUserHandler(eventPublisher)
      createUserCommand = mock<CreateUserCommand>({
        data: undefined
      })
      await createUserHandler.execute(createUserCommand)
      expect(eventPublisher.mergeObjectContext).toBeCalledWith(new UserAggregate(undefined))
      expect(userAggregate.create).toBeCalledWith(createUserCommand.data)
      expect(userAggregate.create).toBeCalledTimes(1)
      expect(userAggregate.commit).toBeCalledWith()
      expect(userAggregate.commit).toBeCalledTimes(1)
    })
  })
})
