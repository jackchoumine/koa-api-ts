/*
 * @Description :
 * @Date        : 2021-11-01 00:13:07 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-02 02:35:16 +0800
 * @LastEditors : JackChou
 */
import { Server } from 'http'
// 引入配置文件
import dotenv, { DotenvConfigOptions } from 'dotenv'
const envConfig: DotenvConfigOptions = {
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
}
dotenv.config(envConfig)

import Koa from 'koa'
// 引入路由
import router from './route'
import koaBody from 'koa-body'
import { accessLog } from './middlewares'
import connectDB from './db/index'
const app = new Koa()

connectDB()
// app.use(accessLog)
app.use(koaBody()).use(router.routes())

export default function runApp(port: number): Server {
  return app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
  })
}
