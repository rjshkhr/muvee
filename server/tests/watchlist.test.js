import supertest from 'supertest'
import mongoose from 'mongoose'

import app from '../app.js'
import Watchlist from '../models/watchlist.model.js'
import User from '../models/user.model.js'
import watchlistService from '../services/watchlist.service.js'

const api = supertest(app)

describe('When user is logged in', () => {
  let loggedInUser
  let movie1
  let movie2

  beforeEach(async () => {
    await Watchlist.deleteMany()
    await User.deleteMany()

    loggedInUser = await api.post('/api/users/register').send({
      name: 'test2000',
      email: 'test2000@email.com',
      password: 'test2000'
    })

    movie1 = {
      title: 'movie 1',
      movieId: '1',
      imgPath: '/randompath1',
      releaseYear: 2021,
      voteAvg: 9.9,
      user: loggedInUser.body.data.user.id
    }

    movie2 = {
      title: 'movie 2',
      movieId: '2',
      imgPath: '/randompath2',
      releaseYear: 2020,
      voteAvg: 5.9,
      user: loggedInUser.body.data.user.id
    }

    await watchlistService.addNewMovie(movie1)
    await watchlistService.addNewMovie(movie2)
  })

  describe('GET /api/watchlist', () => {
    it('returns all movies in watchlist', async () => {
      const res = await api
        .get('/api/watchlist')
        .set('Authorization', 'bearer ' + loggedInUser.body.data.token)
        .expect(200)
        .expect('Content-Type', /json/)

      const movieIds = res.body.data.map(movie => movie.movieId)

      expect(movieIds).toContain(movie1.movieId)
    })
  })

  describe('POST /api/watchlist', () => {
    it('adds a new movie to watchlist', async () => {
      const movieToAdd = {
        title: 'movie 3',
        movieId: '3',
        imgPath: '/randompath3',
        releaseYear: 2021,
        voteAvg: 9.9
      }

      const res = await api
        .post('/api/watchlist')
        .send(movieToAdd)
        .set('Authorization', 'bearer ' + loggedInUser.body.data.token)
        .expect(200)
        .expect('Content-Type', /json/)

      expect(res.body.data.movieId).toBe(movieToAdd.movieId)
    })
  })

  describe('DELETE /api/watchlist', () => {
    it('removes a movie from watchlist', async () => {
      const movies = await watchlistService.getAllMovies(
        loggedInUser.body.data.user.id
      )
      const movieToDelete = movies[0]

      const res = await api
        .delete(`/api/watchlist/${movieToDelete.id}`)
        .set('Authorization', 'bearer ' + loggedInUser.body.data.token)
        .expect(200)
        .expect('Content-Type', /json/)

      const moviesAfterDeletion = await watchlistService.getAllMovies(
        loggedInUser.body.data.user.id
      )

      expect(res.body.data.id).toBe(movieToDelete.id)
      expect(moviesAfterDeletion).toHaveLength(movies.length - 1)
    })
  })
})

afterAll(async () => {
  await Watchlist.deleteMany()
  await User.deleteMany()
  await mongoose.connection.close()
})
