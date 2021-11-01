/*
 * @Description :
 * @Date        : 2021-11-01 20:42:45 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 23:24:38 +0800
 * @LastEditors : JackChou
 */
import { User } from '../models'
class UserService {
  getUser() {
    return User.findAll()
  }
}
export default new UserService()
