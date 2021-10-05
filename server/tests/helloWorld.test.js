import mongoose from 'mongoose'
import supertest from 'supertest'

import app from '../app'

const api = supertest(app)

describe('GET /api/message', () => {
  it('responds with hello world message', async () => {
    const response = await api
      .get('/api/message')
      .expect(200)
      .expect('Content-Type', /json/)

    expect(response.body.message).toBe('Hello World')
  })
})

afterAll(async () => {
  await mongoose.connection.close()
})
