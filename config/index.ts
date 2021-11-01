/*
 * @Description : 项目配置文件
 * @Date        : 2021-11-01 01:56:57 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-02 01:46:10 +0800
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
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRATION_TIME,
  },
}
export default config
