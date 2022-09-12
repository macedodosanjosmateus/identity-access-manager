import { registerAs } from '@nestjs/config'
import Joi from 'joi'

export const sqlConfig = () =>
  registerAs('sql', () => {
    const values = {
      type: process.env.SQL_DB_TYPE,
      username: process.env.SQL_DB_USERNAME,
      password: process.env.SQL_DB_PASSWORD,
      host: process.env.SQL_DB_HOST,
      port: parseInt(process.env.SQL_DB_PORT),
      database: process.env.SQL_DB_NAME,
      synchronize: process.env.SQL_DB_SYNCHRONIZE === 'true'
    }
    const schema = Joi.object({
      type: Joi.valid('mysql').required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
      host: Joi.string().required(),
      port: Joi.number().required(),
      database: Joi.string().required(),
      synchronize: Joi.boolean().required()
    })
    const { error } = schema.validate(values, { abortEarly: false })
    if (error) {
      throw new Error(error.message)
    }
    return values
  })
