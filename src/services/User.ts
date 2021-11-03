/*
 * @Description :
 * @Date        : 2021-11-01 20:42:45 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-04 01:18:39 +0800
 * @LastEditors : JackChou
 */
import { User } from '../models'
class UserService {
  async getUsers(filter = {}) {
    const users = await User.findAll({ where: filter })
    return users
  }
  async addUser(user) {
    const users = await User.create(user)
    return users
  }
}
export default new UserService()
