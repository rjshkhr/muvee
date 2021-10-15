import PropTypes from 'prop-types'

import * as Styled from './MovieItem.styles'

const imgURL = 'https://image.tmdb.org/t/p/original'

const MovieItem = ({ movie }) => {
  const title =
    movie.title.length > 25 ? movie.title.slice(0, 25) + '...' : movie.title

  const releaseYear = movie.release_date.slice(0, 4)

  console.log(movie)

  return (
    <Styled.Container>
      <img src={`${imgURL}/${movie.backdrop_path}`} alt={movie.title} />

      <Styled.Title title={movie.title}>
        {title} ({releaseYear})
      </Styled.Title>

      <Styled.IconsContainer>
        <Styled.Rating>
          <Styled.StarIcon />
          <Styled.RatingText>{movie.vote_average}</Styled.RatingText>
        </Styled.Rating>
        <Styled.PlaylistAddIcon />
      </Styled.IconsContainer>
    </Styled.Container>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string.isRequired
  })
}

export default MovieItem
