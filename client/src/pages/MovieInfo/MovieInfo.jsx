import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'


import { getDetailsActions } from '../../store/movies/actions'
import * as Styled from './MovieInfo.style'

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

  return <Styled.Title>{movie.title}</Styled.Title>
}

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
}

export default MovieInfo
