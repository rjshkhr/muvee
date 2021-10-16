import PropTypes, { object } from 'prop-types'
import uniqid from 'uniqid'

import MovieItem from '../MovieItem'

import * as Styled from './MovieList.styles'

const MovieList = ({ movies }) => {
  console.log(movies)
  return (
    <Styled.MovieList>
      {movies.map(movie => (
        <MovieItem key={uniqid()} movie={movie} />
      ))}
    </Styled.MovieList>
  )
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(object)
}

export default MovieList
