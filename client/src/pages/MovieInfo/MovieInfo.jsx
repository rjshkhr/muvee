import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

import MovieDetails from '../../components/MovieDetails'

import { getDetailsActions } from '../../store/movies/actions'

const MovieInfo = () => {
  const movie = useSelector(({ movieslist }) => movieslist.details)

  const {
    params: { movieId }
  } = useRouteMatch('/movie/:movieId')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetailsActions(movieId))
  }, [dispatch, movieId])

  if (!movie) return null

  return <MovieDetails movie={movie} />
}

export default MovieInfo
