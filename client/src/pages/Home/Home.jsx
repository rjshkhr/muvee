import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import MovieList from '../../components/MovieList'

import { getMoviesAction } from '../../store/movies/actions'

const Home = () => {
  const dispatch = useDispatch()

  const movies = useSelector(({ movieslist }) => movieslist.movies)

  useEffect(() => {
    dispatch(getMoviesAction('popular'))
  }, [dispatch])

  return <MovieList movies={movies} />
}

export default Home
