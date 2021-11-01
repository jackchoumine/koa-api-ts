/*
 * @Description :
 * @Date        : 2021-11-01 00:24:26 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 23:34:30 +0800
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
}
export default new UserController()
