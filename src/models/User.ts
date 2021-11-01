/*
 * @Description : 用户实体
 * @Date        : 2021-11-01 19:46:06 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 22:46:33 +0800
 * @LastEditors : JackChou
 */
import { Column, Model, Table } from 'sequelize-typescript'

@Table
class User extends Model {
  // 用户名
  @Column
  username!: string
  // 密码
  @Column
  password!: string
  // 创建时间
  // createdAt!: Date
  // 更新时间
  // updatedAt!: Date
}

export default User
