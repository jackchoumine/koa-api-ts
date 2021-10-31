/*
 * @Description :
 * @Date        : 2021-11-01 02:52:31 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 03:25:43 +0800
 * @LastEditors : JackChou
 */

import { accessLogger } from '../logger'
import { Context, Next } from 'koa'

export default function accessLog(ctx: Context, next: Next) {
  const logStr = `path:${ctx.path} | method:${ctx.method} | ua:${ctx.headers['user-agent']} | ip:${ctx.ip}`
  accessLogger.info(logStr)
  next()
}
