/*
 * @Description :
 * @Date        : 2021-11-01 00:24:26 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 00:24:27 +0800
 * @LastEditors : JackChou
 */

import { Next, Context } from 'koa'
class UserController {
  async getUserInfo(ctx: Context, next: Next) {
    ctx.body = {
      name: 'JackChou',
      age: 18,
    }
  }
}
export default new UserController()
