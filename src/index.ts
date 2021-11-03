/*
 * @Description :
 * @Date        : 2021-11-01 00:13:07 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-04 00:13:54 +0800
 * @LastEditors : JackChou
 */
import { Server } from 'http'
import path from 'path'
import util from 'util'
import fs from 'fs'
import Koa, { Context, Next } from 'koa'
import koaBody from 'koa-body'
import compose from 'koa-compose'
import koaStatic from 'koa-static'
import mount from 'koa-mount'
import dotenv, { DotenvConfigOptions } from 'dotenv'
// 引入路由
import router from './route'
import { accessLog } from './middlewares'
import connectDB, { connectMongoDb } from './db/index'

// 引入配置文件
const envConfig: DotenvConfigOptions = {
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
}
dotenv.config(envConfig)

const app = new Koa()

// connectMongoDb()
connectDB()
// router.get('/foo', ctx => {
//   ctx.body = 'foo '
// })
// router.get('/bar', ctx => {
//   // FIXME 302 FOUND 和 301 有区别？
//   ctx.redirect('/foo')
// })

function one(ctx: Context, next: Next) {
  console.log('--> one')
  next()
  console.log('<-- one')
}

function two(ctx: Context, next: Next) {
  console.log('--> two')
  next()
  console.log('<-- two')
}

function three(ctx: Context, next: Next) {
  console.log('--> three')
  next()
  console.log('<-- three')
}

app.use(async (ctx, next) => {
  try {
    console.log('--->处理异常')
    await next()
    // FIXME 为何不使用 await next()，无法捕获呢？
    console.log('<---处理异常')
  } catch (error: any) {
    console.log(error.message)
    ctx.status = 500
    ctx.body = error.message || '服务器错误'
  }
})

// app.use((ctx, next) => {
//   // const data = await util.promisify(fs.readFile)(path.join(__dirname, './public/main.js'), 'utf-8')
//   // ctx.body = data
//   // JSON.parse('hello')
//   ctx.body = 'hello world'
//   console.log('--->hello world')
//   next()
//   console.log('<---hello world')
// })

// NOTE 同步中间件和异步中间件混用，造成 404
// 最佳实践：同步中间件在前，异步中间件在后，这样可以保证同步中间件的执行顺序

// app.use(compose([two, one, three]))
// app.use(one)
// app.use(two)
// app.use(three)
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
