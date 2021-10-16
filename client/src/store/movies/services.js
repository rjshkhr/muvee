import axios from 'axios'

export const getMovies = async type => {
  const res = await axios.get(`/api/movies/${type}`)
  return res.data
}
