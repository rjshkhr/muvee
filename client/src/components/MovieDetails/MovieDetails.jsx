import PropTypes from 'prop-types'

import * as Styled from './MovieDetails.styles'

const MovieDetails = ({ movie }) => {
  return <Styled.Title>{movie.title}</Styled.Title>
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
}

export default MovieDetails
