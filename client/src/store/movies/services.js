import axios from 'axios'

export const getMovies = async (type, page = 1) => {
  const res = await axios.get(`/api/movies/${type}?page=${page}`)
  return res.data
}

export const getDetails = async movieId => {
  const res = await axios.get(`/api/movies/${movieId}/details`)
  return res.data
}
