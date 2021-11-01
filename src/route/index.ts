/*
 * @Description : 路由配置
 * @Date        : 2021-11-01 00:22:13 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 23:33:57 +0800
 * @LastEditors : JackChou
 */
import Router from 'koa-router'
import { user } from '../controllers'
const router = new Router()
// router.get('/users', async (ctx, next) => {
//   ctx.body = { success: true, data: [] }
//   await next()
// })
router.get('/users', user.getUserInfo)
export default router
