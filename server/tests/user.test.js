import supertest from 'supertest'
import mongoose from 'mongoose'

import app from '../app.js'
import User from '../models/user.model.js'
import helper from './test-helper.js'
import userService from '../services/user.service.js'

const api = supertest(app)

describe('When initially there are some users', () => {
  beforeEach(async () => {
    await User.deleteMany()
    await User.insertMany(helper.initialUsers)
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

      const updatedUsers = await userService.getAllUsers()
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

  describe('GET /api/users/profile/:id', () => {
    let loggedInUser

    beforeEach(async () => {
      loggedInUser = await api.post('/api/users/register').send({
        name: 'test1000',
        email: 'test1000@email.com',
        password: 'test1000'
      })
    })

    it('returns the user if correct id and token is provided', async () => {
      const res = await api
        .get(`/api/users/profile/${loggedInUser.body.data.user.id}`)
        .send({ email: 'test1000@email.com', password: 'test1000' })
        .set('Authorization', 'bearer ' + loggedInUser.body.data.token)
        .expect(200)
        .expect('Content-Type', /json/)

      expect(res.body.data.email).toBe('test1000@email.com')
    })

    it('fails if token is not provided or invalid', async () => {
      await api
        .get(`/api/users/profile/${loggedInUser.body.data.user.id}`)
        .send({ email: 'test1000@email.com', password: 'test1000' })
        .expect(401)
        .expect('Content-Type', /json/)

      await api
        .get(`/api/users/profile/${loggedInUser.body.data.user.id}`)
        .set('Authorization', 'bearer ' + 'invalid token')
        .send({ email: 'test1000@email.com', password: 'test1000' })
        .expect(403)
        .expect('Content-Type', /json/)
    })

    it('fails if id is invalid or user does not exist', async () => {
      await api
        .get(`/api/users/profile/invalid`)
        .set('Authorization', 'bearer ' + loggedInUser.body.data.token)
        .expect(400)
        .expect('Content-Type', /json/)

      await api
        .get(`/api/users/profile/507f1f77bcf86cd799439011`)
        .set('Authorization', 'bearer ' + loggedInUser.body.data.token)
        .send({ email: 'test1000@email.com', password: 'test1000' })
        .expect(404)
        .expect('Content-Type', /json/)
    })
  })
})

afterAll(async () => {
  await mongoose.connection.close()
})
