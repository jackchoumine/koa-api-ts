/*
 * @Description :
 * @Date        : 2021-11-01 00:24:26 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-04 01:21:00 +0800
 * @LastEditors : JackChou
 */

import { Next, Context } from 'koa'
import { userService } from '../services'
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
      const user = await userService.addUser({ username, password })
      ctx.body = {
        success: true,
        data: user,
      }
    }
    await next()
  }
}
export const user = new UserController()
