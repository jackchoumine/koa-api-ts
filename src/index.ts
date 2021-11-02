/*
 * @Description :
 * @Date        : 2021-11-01 00:13:07 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-02 21:58:09 +0800
 * @LastEditors : JackChou
 */
import { Server } from 'http'
import path from 'path'
import Koa from 'koa'
import koaBody from 'koa-body'
import koaStatic from 'koa-static'
import mount from 'koa-mount'
import dotenv, { DotenvConfigOptions } from 'dotenv'
// 引入路由
import router from './route'
import { accessLog } from './middlewares'
import connectDB from './db/index'

// 引入配置文件
const envConfig: DotenvConfigOptions = {
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
}
dotenv.config(envConfig)

const app = new Koa()

// connectDB()
router.get('/foo', ctx => {
  ctx.body = 'foo '
})
router.get('/bar', ctx => {
  // FIXME 302 FOUND 和 301 有区别？
  ctx.redirect('/foo')
})
// NOTE mount 用于设置虚拟路径
// FIXME 设置静态资料虚拟路径的目的是为何？
app.use(mount('/public', koaStatic(path.join(__dirname, './public'))))
// app.use(accessLog)
app.use(koaBody()).use(router.routes())

export default function runApp(port: number): Server {
  return app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
  })
}
