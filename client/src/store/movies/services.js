import axios from 'axios'

export const getMovies = async type => {
  const res = await axios.get(`/api/movies/${type}`)
  return res.data
}

export const getDetails = async movieId => {
  const res = await axios.get(`/api/movies/${movieId}/details`)
  return res.data
}
