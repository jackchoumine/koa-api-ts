/*
 * @Description :
 * @Date        : 2021-11-02 02:06:18 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-02 03:33:25 +0800
 * @LastEditors : JackChou
 */
import { Context, Next } from 'koa'
import { JWT } from '../utils'

export async function auth(ctx: Context, next: Next) {
  const token = ctx.headers['authorization']
  if (!token) {
    ctx.status = 401
    ctx.body = {
      success: false,
      message: '请先登录',
    }
    return
  }
  const { message, data } = JWT.verify(token!)
  if (message) {
    ctx.status = 401
    let _message = ''
    switch (message) {
      case 'jwt malformed':
        _message = '非法的 token'
        break
      case 'jwt expired':
        _message = 'token 过期，请先登录'
        break
      default:
        _message = '未知错误'
        break
    }
    ctx.body = {
      success: false,
      message: _message,
    }
    return //next()
  }
  await next()
}
