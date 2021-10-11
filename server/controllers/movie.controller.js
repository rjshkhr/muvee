import axios from 'axios'

import config from '../utils/config.js'

const baseUrl = 'https://api.themoviedb.org/3/movie'

const getMovies = async (type, page = 1, movieId = null) => {
  const url = movieId ? `${baseUrl}/${movieId}` : baseUrl

  const response = await axios.get(
    `${url}/${type}?api_key=${config.TMDB_API_KEY}&language=en-US&page=${page}`
  )
  return response.data
}

const getPopular = async (req, res, next) => {
  try {
    const movies = await getMovies('popular', req.query.page)
    res.json({ data: movies })
  } catch (err) {
    next(err)
  }
}

const getTopRated = async (req, res, next) => {
  try {
    const movies = await getMovies('top_rated', req.query.page)
    res.json({ data: movies })
  } catch (err) {
    next(err)
  }
}

const getNowPlaying = async (req, res, next) => {
  try {
    const movies = await getMovies('now_playing', req.query.page)
    res.json({ data: movies })
  } catch (err) {
    next(err)
  }
}

const getUpcoming = async (req, res, next) => {
  try {
    const movies = await getMovies('upcoming', req.query.page)
    res.json({ data: movies })
  } catch (err) {
    next(err)
  }
}

const getRecommended = async (req, res, next) => {
  try {
    const movies = await getMovies(
      'recommendations',
      req.query.page,
      req.params.id
    )
    res.json({ data: movies })
  } catch (err) {
    next(err)
  }
}

const getSimilar = async (req, res, next) => {
  try {
    const movies = await getMovies('similar', req.query.page, req.params.id)
    res.json({ data: movies })
  } catch (err) {
    next(err)
  }
}

const getReviews = async (req, res, next) => {
  try {
    const movies = await getMovies('reviews', req.query.page, req.params.id)
    res.json({ data: movies })
  } catch (err) {
    next(err)
  }
}

const getDetails = async (req, res, next) => {
  try {
    const movieDetails = await axios.get(
      `${baseUrl}/${req.params.id}?api_key=${config.TMDB_API_KEY}&language=en-US`
    )
    res.json({ data: movieDetails.data })
  } catch (err) {
    next(err)
  }
}

export default {
  getPopular,
  getTopRated,
  getNowPlaying,
  getUpcoming,
  getRecommended,
  getSimilar,
  getReviews,
  getDetails
}
