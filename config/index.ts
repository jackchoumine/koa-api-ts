/*
 * @Description : 项目配置文件
 * @Date        : 2021-11-01 01:56:57 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-04 00:01:48 +0800
 * @LastEditors : JackChou
 */

/**
DB_HOST='localhost'
DB_NAME='koa-demo'
DB_USER='root'
DB_PASSWORD='KKms8848!!'
DB_PORT=3306
 */
const config = {
  app: {
    port: process.env.PORT || 8080,
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    name: process.env.DB_NAME || 'koa-demo',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'KKms8848!!',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRATION_TIME,
  },
}
export default config
