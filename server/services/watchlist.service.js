import Watchlist from '../models/watchlist.model.js'

const getAllMovies = async userId => {
  return await Watchlist.find({ user: userId }).populate('user', {
    email: 1,
    name: 1
  })
}

const getMovieById = async id => {
  return await Watchlist.findById(id).populate('user', {
    email: 1,
    name: 1
  })
}

const addNewMovie = async movie => {
  return await Watchlist.create(movie)
}

const removeMovie = async movieId => {
  await Watchlist.findByIdAndRemove(movieId)
}

export default {
  getAllMovies,
  getMovieById,
  addNewMovie,
  removeMovie
}
