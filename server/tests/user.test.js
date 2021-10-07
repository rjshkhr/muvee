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

    it('fails if id does not exist', async () => {
      await api
        .get(`/api/users/507f1f77bcf86cd799439011`)
        .expect(404)
        .expect('Content-Type', /json/)
    })

    it('fails if id is invalid', async () => {
      await api.get('/api/users/abc').expect(400).expect('Content-Type', /json/)
    })
  })

  describe('POST /api/users/register', () => {
    it('creates new user', async () => {
      const newUser = {
        name: 'test1000',
        email: 'test1000@email.com',
        password: 'test1000'
      }

      const res = await api
        .post('/api/users/register')
        .send(newUser)
        .expect(201)
        .expect('Content-Type', /json/)

      expect(res.body.passwordHash).not.toEqual(newUser.password)

      const updatedUsers = await helper.usersInDb()
      expect(updatedUsers).toHaveLength(helper.initialUsers.length + 1)

      const emails = updatedUsers.map(user => user.email)
      expect(emails).toContain(newUser.email)
    })

    it('fails if email is already taken', async () => {
      await api
        .post(`/api/users/register`)
        .send({
          name: 'test1000',
          email: helper.initialUsers[0].email,
          password: 'test1000'
        })
        .expect(409)
    })

    it('fails if name, email or password is missing', async () => {
      await api
        .post('/api/users/register')
        .send({ name: 'test1000', email: 'test1000@email.com' })
        .expect(422)

      await api
        .post('/api/users/register')
        .send({ name: 'test1001', password: 'test1001' })
        .expect(422)

      await api
        .post('/api/users/register')
        .send({ password: 'test1002', email: 'test1002@email.com' })
        .expect(422)
    })

    it('fails if password is less than 8 characters', async () => {
      await api
        .post(`/api/users/register`)
        .send({
          name: 'test2000',
          email: 'test2000@email.com',
          password: 'test200'
        })
        .expect(422)
    })
  })

  describe('POST /api/users/login', () => {
    beforeEach(async () => {
      await api.post('/api/users/register').send({
        name: 'test1000',
        email: 'test1000@email.com',
        password: 'test1000'
      })
    })

    it('logs in a registered user', async () => {
      await api
        .post('/api/users/login')
        .send({ email: 'test1000@email.com', password: 'test1000' })
        .expect(200)
        .expect('Content-Type', /json/)
    })

    it('fails if email or password is incorrect', async () => {
      await api
        .post('/api/users/login')
        .send({ email: 'test1000@email.com', password: 'incorrect' })
        .expect(401)

      await api
        .post('/api/users/login')
        .send({ email: 'incorrect@email.com', password: 'test1000' })
        .expect(401)
    })

    it('fails if email or password is missing', async () => {
      await api
        .post('/api/users/login')
        .send({ email: 'test100@email.com' })
        .expect(422)

      await api
        .post('/api/users/login')
        .send({ password: 'test1000' })
        .expect(422)
    })
  })
})

afterAll(async () => {
  await mongoose.connection.close()
})
