import { sqlConfig } from '@/config/sql.config'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { Test, TestingModuleBuilder } from '@nestjs/testing'

describe('sqlConfig', () => {
  jest.clearAllMocks()
  let configService: ConfigService
  let testingModuleBuilder: TestingModuleBuilder
  beforeEach(() => {
    testingModuleBuilder = Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: 'test.env',
          expandVariables: true,
          cache: false
        }),
        ConfigModule.forFeature(sqlConfig())
      ],
      controllers: [],
      providers: []
    })
  })
  it('should have appropriate db configs', async () => {
    const moduleRef = await testingModuleBuilder.compile()
    configService = moduleRef.get<ConfigService>(ConfigService)
    const configs = configService.get('sql')
    expect(configs).toHaveProperty('type')
    expect(configs).toHaveProperty('username')
    expect(configs).toHaveProperty('password')
    expect(configs).toHaveProperty('host')
    expect(configs).toHaveProperty('port')
    expect(configs).toHaveProperty('database')
    expect(configs).toHaveProperty('autoLoadEntities')
  })
  it('should throw a error if appropriate db configs is not present', async () => {
    const moduleRef = testingModuleBuilder.compile()
    delete process.env.SQL_DB_TYPE
    await expect(moduleRef).rejects.toThrow()
  })
})
