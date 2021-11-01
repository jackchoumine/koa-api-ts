/*
 * @Description :
 * @Date        : 2021-11-01 20:42:45 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 20:46:41 +0800
 * @LastEditors : JackChou
 */
import { User } from '../models'
export default class UserService {
  getUser() {
    return User.findOne({
      where: {
        id: 1,
      },
    })
  }
}
