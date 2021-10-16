import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import * as Styled from './MovieItem.styles'
import {
  addWatchlistAction,
  removeWatchlistAction
} from '../../store/watchlist/actions'
import { MdPlaylistAddCheck } from 'react-icons/md'

const imgURL = 'https://image.tmdb.org/t/p/original'

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch()

  const movies = useSelector(({ watchlist }) => watchlist.movies)

  const title =
    movie.title.length > 25 ? movie.title.slice(0, 25) + '...' : movie.title

  const releaseYear = movie.releaseYear || movie.release_date?.slice(0, 4)
  const imgPath = movie.imgPath || movie.backdrop_path
  const voteAvg = movie.voteAvg || movie.vote_average
  const movieId = typeof movie.id === 'string' ? movie.movieId : movie.id

  const addedToWatchlist = movies.find(movie => movie.movieId === movieId)

  const handleWatchlist = () => {
    const movieToAdd = {
      releaseYear,
      imgPath,
      voteAvg,
      movieId,
      title: movie.title
    }

    !addedToWatchlist
      ? dispatch(addWatchlistAction(movieToAdd))
      : dispatch(removeWatchlistAction(movie.id))
  }

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

        <Styled.WatchlistButton onClick={handleWatchlist}>
          {addedToWatchlist ? (
            <MdPlaylistAddCheck />
          ) : (
            <Styled.PlaylistAddIcon />
          )}
        </Styled.WatchlistButton>
      </Styled.IconsContainer>
    </Styled.Container>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    movieId: PropTypes.number,
    release_date: PropTypes.string,
    releaseYear: PropTypes.string,
    vote_average: PropTypes.number,
    voteAvg: PropTypes.number,
    backdrop_path: PropTypes.string,
    imgPath: PropTypes.string
  })
}

export default MovieItem
