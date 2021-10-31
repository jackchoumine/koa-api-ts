/*
 * @Description :
 * @Date        : 2021-11-01 00:24:26 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 03:26:04 +0800
 * @LastEditors : JackChou
 */

import { Next, Context } from 'koa'
import logger from '../logger'
class UserController {
  async getUserInfo(ctx: Context, next: Next) {
    ctx.body = {
      name: 'JackChou',
      age: 18,
    }
  }
}
export default new UserController()
