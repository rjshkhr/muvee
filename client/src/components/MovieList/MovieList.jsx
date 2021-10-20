import PropTypes, { object } from 'prop-types'

import MovieItem from '../MovieItem'

import * as Styled from './MovieList.styles'

const MovieList = ({ movies }) => {
  return (
    <Styled.MovieList>
      {movies.map(movie => {
        const movieId = movie.movieId || movie.id
        return <MovieItem key={movieId} movieId={movieId} movie={movie} />
      })}
    </Styled.MovieList>
  )
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(object)
}

export default MovieList
