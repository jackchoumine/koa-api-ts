/*
 * @Description : 路由配置
 * @Date        : 2021-11-01 00:22:13 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-02 03:28:15 +0800
 * @LastEditors : JackChou
 */
import Router from 'koa-router'
import { user } from '../controllers'
import { JWT } from '../utils'
import { auth } from '../middlewares'
const router = new Router()
// router.get('/users', async (ctx, next) => {
//   ctx.body = { success: true, data: [] }
//   await next()
// })
// FIXME koa 中间件如何编写
router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body
  console.log(username, password)
  const token = JWT.sign({ username, password, id: 100 })
  ctx.body = { success: true, data: token }
})
router.use(auth)
// FIXME 验证通过后，如何获取到用户信息？，// 但是不能获取到用户的权限信息
router.get('/users', user.getUserInfo)
export default router
