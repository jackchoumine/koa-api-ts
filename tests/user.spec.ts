/*
 * @Description : user unit test
 * @Date        : 2021-11-01 00:59:01 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-11-01 01:50:37 +0800
 * @LastEditors : JackChou
 */
import { Server } from 'http'
import request from 'supertest'
import runApp from '../src'
describe('user', () => {
  let app: Server
  beforeAll(() => {
    app = runApp(3003)
  })
  it('get user', () => {
    return request(app)
      .get('/user')
      .expect(200)
      .then(response => {
        expect(response.body).toEqual({
          name: 'JackChou',
          age: 18,
        })
      })
  })
  afterAll(async () => {
    app.close()
  })
})
