import supertest from 'supertest'
import mongoose from 'mongoose'

import app from '../app.js'
import User from '../models/user.model.js'
import helper from './test-helper.js'

const api = supertest(app)

describe('When initially there are some users', () => {
  beforeEach(async () => {
    await User.deleteMany()
    await User.insertMany(helper.initialUsers)
  })

  describe('GET /api/users', () => {
    it('returns all users', async () => {
      const res = await api
        .get('/api/users')
        .expect(200)
        .expect('Content-Type', /json/)

      expect(res.body).toHaveLength(helper.initialUsers.length)
    })

    it('contains a specific user', async () => {
      const res = await api
        .get('/api/users')
        .expect(200)
        .expect('Content-Type', /json/)

      const emails = res.body.map(user => user.email)
      expect(emails).toContain(helper.initialUsers[0].email)
    })
  })

  describe('GET /api/users/:id', () => {
    it('returns one user if correct id is provided', async () => {
      const users = await helper.usersInDb()
      const userToView = users[0]

      const res = await api
        .get(`/api/users/${userToView.id}`)
        .expect(200)
        .expect('Content-Type', /json/)

      const parsedUserToView = JSON.parse(JSON.stringify(userToView))
      expect(res.body).toEqual(parsedUserToView)
    })

    it('fails with if id does not exist', async () => {
      await api
        .get(`/api/users/507f1f77bcf86cd799439011`)
        .expect(404)
        .expect('Content-Type', /json/)
    })
  })
})

afterAll(async () => {
  await mongoose.connection.close()
})
