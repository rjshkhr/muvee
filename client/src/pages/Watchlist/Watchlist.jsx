import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import MovieList from '../../components/MovieList'
import NotFound from '../NotFound'
import Loading from '../../components/Loading'

import { getWatchlistAction } from '../../store/watchlist/actions'

const Watchlist = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWatchlistAction())
  }, [dispatch])

  const { movies, moviesLoading, moviesError } = useSelector(
    ({ watchlist }) => watchlist
  )

  if (moviesLoading) return <Loading />

  if (moviesError) return <NotFound text='Something went wrong!' />

  if (!movies.length) return <NotFound text='Watchlist empty...' />

  return <MovieList movies={movies} />
}

export default Watchlist
