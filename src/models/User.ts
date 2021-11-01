/*
 * @Description : 用户实体
 * @Date        : 2021-11-01 19:46:06 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 19:48:17 +0800
 * @LastEditors : JackChou
 */
import { Model, Table } from 'sequelize-typescript'

@Table
class User extends Model {}

export default User
