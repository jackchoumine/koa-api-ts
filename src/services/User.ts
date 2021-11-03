/*
 * @Description :
 * @Date        : 2021-11-01 20:42:45 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-04 00:03:42 +0800
 * @LastEditors : JackChou
 */
import { User } from '../models'
class UserService {
  async getUser() {
    const users = await User.findAll()
    return users
  }
}
export default new UserService()
