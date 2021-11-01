/*
 * @Description : 业务无关的工具函数
 * @Date        : 2021-11-02 01:37:33 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-02 03:25:14 +0800
 * @LastEditors : JackChou
 */
import jwt, { decode } from 'jsonwebtoken'
import config from '../../config'

const { expiresIn, secret } = config.jwt

export const JWT = {
  sign(data: any) {
    return jwt.sign(data, secret!, { expiresIn: expiresIn })
  },
  verify(token: string) {
    try {
      const decodedData = jwt.verify(token, secret!)
      return { data: decodedData, message: null }
    } catch (error: any) {
      return { data: null, message: error.message }
    }
  },
}
