import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import MovieList from '../../components/MovieList'
import Empty from '../../components/Empty'

import { getWatchlistAction } from '../../store/watchlist/actions'

const Watchlist = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWatchlistAction())
  }, [dispatch])

  const movies = useSelector(({ watchlist }) => watchlist.movies)

  if (!movies.length) return <Empty text='Watchlist empty' />

  return <MovieList movies={movies} />
}

export default Watchlist
