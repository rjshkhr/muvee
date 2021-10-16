import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import MovieList from '../../components/MovieList'

import { getWatchlistAction } from '../../store/watchlist/actions'

const Watchlist = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWatchlistAction())
  }, [dispatch])

  const movies = useSelector(({ watchlist }) => watchlist.movies)

  return <MovieList movies={movies} />
}

export default Watchlist
