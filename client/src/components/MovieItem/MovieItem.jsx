import PropTypes from 'prop-types'

import * as Styled from './MovieItem.styles'
import { MdPlaylistAddCheck } from 'react-icons/md'

const imgURL = 'https://image.tmdb.org/t/p/original'

const MovieItem = ({ movie }) => {
  const title =
    movie.title.length > 25 ? movie.title.slice(0, 25) + '...' : movie.title

  const releaseYear = movie.releaseYear || movie.release_date?.slice(0, 4)
  const imgPath = movie.imgPath || movie.backdrop_path
  const voteAvg = movie.voteAvg || movie.vote_average

  return (
    <Styled.Container>
      <img src={`${imgURL}/${imgPath}`} alt={movie.title} />

      <Styled.Title title={movie.title}>
        {title} ({releaseYear})
      </Styled.Title>

      <Styled.IconsContainer>
        <Styled.Rating>
          <Styled.StarIcon />
          <Styled.RatingText>{voteAvg}</Styled.RatingText>
        </Styled.Rating>

        <Styled.WatchlistButton>
          <MdPlaylistAddCheck />
        </Styled.WatchlistButton>
      </Styled.IconsContainer>
    </Styled.Container>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    release_date: PropTypes.string,
    releaseYear: PropTypes.string,
    vote_average: PropTypes.number,
    voteAvg: PropTypes.number,
    backdrop_path: PropTypes.string,
    imgPath: PropTypes.string
  })
}

export default MovieItem
