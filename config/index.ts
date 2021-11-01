/*
 * @Description : 项目配置文件
 * @Date        : 2021-11-01 01:56:57 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 19:35:38 +0800
 * @LastEditors : JackChou
 */
const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
}
export default config
