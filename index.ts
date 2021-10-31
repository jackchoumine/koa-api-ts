/*
 * @Description : koa 入口
 * @Date        : 2021-11-01 00:12:41 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 02:12:12 +0800
 * @LastEditors : JackChou
 */
import runApp from './src'
import config from './config'
runApp(+config.app.port)
