/*
 * @Description :
 * @Date        : 2021-11-01 02:52:31 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 23:35:35 +0800
 * @LastEditors : JackChou
 */

import { accessLogger } from '../logger'
import { Context, Next } from 'koa'

//NOTE 中间件 必须是一个 async 函数 否则路径处理器里有 await,会返回 404
// info https://github.com/koajs/koa/issues/905
export default async function accessLog(ctx: Context, next: Next) {
  const logStr = `path:${ctx.path} | method:${ctx.method} | ua:${ctx.headers['user-agent']} | ip:${ctx.ip}`
  accessLogger.info(logStr)
  await next()
}
