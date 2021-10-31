/*
 * @Description :
 * @Date        : 2021-11-01 00:13:07 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 00:23:10 +0800
 * @LastEditors : JackChou
 */
import { Server } from 'http'
import Koa from 'koa'
// import bodyParser from 'koa-bodyparser'
import router from './route'

const app = new Koa()

app.use(router.routes())

export default function runApp(port: number): Server {
  return app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
  })
}
