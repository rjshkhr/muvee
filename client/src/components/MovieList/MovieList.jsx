import PropTypes, { object } from 'prop-types'

import MovieItem from '../MovieItem'

import * as Styled from './MovieList.styles'

const MovieList = ({ movies }) => {
  return (
    <Styled.MovieList>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Styled.MovieList>
  )
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(object)
}

export default MovieList
