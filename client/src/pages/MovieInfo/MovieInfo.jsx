import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

import Loading from '../../components/Loading'

import { getDetailsActions } from '../../store/movies/actions'
import * as Styled from './MovieInfo.style'

const MovieInfo = () => {
  const { details, detailsLoading } = useSelector(
    ({ movieslist }) => movieslist
  )

  const {
    params: { movieId }
  } = useRouteMatch('/movie/:movieId')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetailsActions(movieId))
  }, [dispatch, movieId])

  if (detailsLoading) return <Loading />

  if (!details) return null

  return <Styled.Title>{details.title}</Styled.Title>
}

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
}

export default MovieInfo
