/*
 * @Description :
 * @Date        : 2021-11-01 00:24:26 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-04 01:38:07 +0800
 * @LastEditors : JackChou
 */

import { Next, Context } from 'koa'
import { userService } from '../services'
import { encrypt } from '../utils'
class UserController {
  async getUserInfo(ctx: Context, next: Next) {
    const users = await userService.getUsers()
    ctx.body = {
      success: true,
      data: users,
    }
    await next()
  }
  async login(ctx: Context, next: Next) {
    return Promise.resolve({ name: 'JackChou', password: '123456', id: 100 })
  }
  async addUser(ctx: Context, next: Next) {
    const { username, password } = ctx.request.body
    const users = await userService.getUsers({ username })
    if (users.length) {
      ctx.body = {
        success: false,
        message: '用户已存在',
      }
    } else {
      // FIXME 加密存储
      // TODO 需要加密传输吗？
      const user = await userService.addUser({ username, password: encrypt(password) })
      ctx.body = {
        success: true,
        data: user,
      }
    }
    await next()
  }
}
export const user = new UserController()
