/*
 * @Description :
 * @Date        : 2021-11-01 00:24:26 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-02 02:17:30 +0800
 * @LastEditors : JackChou
 */

import { Next, Context } from 'koa'
import { userService } from '../services'
class UserController {
  async getUserInfo(ctx: Context, next: Next) {
    const users = await userService.getUser()
    ctx.body = {
      success: true,
      data: users,
    }
    await next()
  }
  async login(ctx: Context, next: Next) {
    return Promise.resolve({ name: 'JackChou', password: '123456', id: 100 })
  }
}
export default new UserController()
