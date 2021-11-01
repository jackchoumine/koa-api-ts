/*
 * @Description :
 * @Date        : 2021-11-01 19:09:13 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 21:03:05 +0800
 * @LastEditors : JackChou
 */
import path from 'path'
import { Sequelize } from 'sequelize-typescript'
import config from '../../config'
import * as models from '../models'

const { name, user, password, host, port } = config.db

const sequelize = new Sequelize(name!, user!, password!, {
  host: host,
  port: +port!, // 转换为 number 类型
  dialect: 'mysql',
  // NOTE 编译后变成 js
  models: Object.values(models),
})

export default async function connectDB() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
