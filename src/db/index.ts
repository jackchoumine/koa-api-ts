/*
 * @Description :
 * @Date        : 2021-11-01 19:09:13 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-03 23:36:32 +0800
 * @LastEditors : JackChou
 */
import mongoose from 'mongoose'
import logger from '../logger'
// import path from 'path'
import { Sequelize } from 'sequelize-typescript'
import config from '../../config'
import * as models from '../models'

const { name, user, password, host, port } = config.db

const sequelize = new Sequelize(name!, user!, password!, {
  host: host,
  port: +port!, // 转换为 number 类型
  dialect: 'mysql',
  // pool: {
  //   max: 5,
  //   idle: 30000,
  //   acquire: 60000,
  // },
  // dialectOptions: {
  //   charset: 'utf8mb4',
  // },
  logging: msg => logger.info('access', msg),
  define: {
    // NOTE Unknown column 'createdAt' in 'field list'
    timestamps: false,
    // NOTE Class constructor Model cannot be invoked without 'new'
    // freezeTableName: true,
    // underscored: true,
    // paranoid: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    // deletedAt: 'deleted_at',
  },
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
export function connectMongoDb() {
  const password = `KKko8848!!`
  const uri = `mongodb+srv://jack:${password}@cluster0.zljho.mongodb.net?retryWrites=true&w=majority`
  mongoose
    .connect(uri)
    .then(response => {
      console.log('response')
    })
    .catch(error => {
      console.log(error)
    })
  // const client = new MongoClient(uri, {})
  // client.connect(err => {
  //   console.log(err)
  //   const collection = client.db('test').collection('devices')
  //   console.log(222)
  //   // perform actions on the collection object
  //   client.close()
  // })
  // console.log(2)
}
