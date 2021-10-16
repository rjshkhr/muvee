import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import MovieList from '../../components/MovieList'
import Loading from '../../components/Loading'

import { getMoviesAction } from '../../store/movies/actions'
import { getWatchlistAction } from '../../store/watchlist/actions'

const Home = () => {
  const dispatch = useDispatch()

  const { movies, moviesLoading } = useSelector(({ movieslist }) => movieslist)

  useEffect(() => {
    dispatch(getMoviesAction('popular'))
  }, [dispatch])

  useEffect(() => {
    dispatch(getWatchlistAction())
  }, [dispatch])

  if (moviesLoading) return <Loading />

  if (!movies.length) return null

  return <MovieList movies={movies} />
}

export default Home
