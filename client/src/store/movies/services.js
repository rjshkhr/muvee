import axios from 'axios'

export const getPopular = async () => {
  const res = await axios.get('/api/movies/popular')
  return res.data
}
