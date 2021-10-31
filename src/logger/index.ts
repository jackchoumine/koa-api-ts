/*
 * @Description :
 * @Date        : 2021-11-01 02:20:28 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 02:49:16 +0800
 * @LastEditors : JackChou
 */
// @ts-nocheck
import { configure, getLogger } from 'log4js'

// configure({
//   appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
//   categories: { default: { appenders: ['cheese'], level: 'error' } },
// })

configure({
  appenders: {
    cheese: {
      type: 'file',
      filename: 'logs/cheese.log',
    },
    access: {
      type: 'file',
      filename: 'logs/access.log',
    },
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'info',
    },
    access: { appenders: ['access'], level: 'info' },
  },
})

export const accessLogger = getLogger('access')
export default getLogger()
