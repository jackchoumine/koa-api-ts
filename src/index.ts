/*
 * @Description :
 * @Date        : 2021-11-01 00:13:07 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 03:15:57 +0800
 * @LastEditors : JackChou
 */
import { Server } from 'http'
// 引入配置文件
import dotenv from 'dotenv'
dotenv.config()
import Koa from 'koa'
// 引入路由
import router from './route'
// import bodyParser from 'koa-bodyparser'
import { accessLog } from './middlewares'

const app = new Koa()

app.use(accessLog).use(router.routes())

export default function runApp(port: number): Server {
  return app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
  })
}
