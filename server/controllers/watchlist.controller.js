import watchlistService from '../services/watchlist.service.js'
import HttpError from '../utils/http-error.js'

const getAll = async (req, res, next) => {
  try {
    const watchlist = await watchlistService.getAllMovies(req.userId)
    res.json({ data: watchlist })
  } catch (err) {
    next(err)
  }
}

const remove = async (req, res, next) => {
  try {
    const movieToDelete = await watchlistService.getMovieById(req.params.id)

    if (!movieToDelete) {
      throw new HttpError(404, 'movie not found')
    }

    if (movieToDelete.user.id !== req.userId) {
      throw new HttpError(403, 'token invalid')
    }

    await watchlistService.removeMovie(req.params.id)

    res
      .status(200)
      .json({ data: movieToDelete, message: `movie removed from watchlist` })
  } catch (err) {
    next(err)
  }
}

const addNew = async (req, res, next) => {
  const { title, movieId, imgPath, releaseYear, voteAvg } = req.body
  try {
    const movie = {
      title,
      movieId,
      imgPath,
      releaseYear,
      voteAvg,
      user: req.userId
    }

    const savedMovie = await watchlistService.addNewMovie(movie)

    res.json({ data: savedMovie, message: 'movie added to watchlist' })
  } catch (err) {
    next(err)
  }
}

export default {
  getAll,
  addNew,
  remove
}
