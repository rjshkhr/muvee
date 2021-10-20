import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import * as Styled from './MovieItem.styles'
import {
  addWatchlistAction,
  removeWatchlistAction
} from '../../store/watchlist/actions'
import { useState } from 'react'

const imgURL = 'https://image.tmdb.org/t/p/original'

const MovieItem = ({ movieId, movie }) => {
  const dispatch = useDispatch()
  const [imgLoading, setImgLoading] = useState(true)

  const moviesInWatchlist = useSelector(({ watchlist }) => watchlist.movies)

  const addedToWatchlist = moviesInWatchlist.find(m => {
    const id = m.movieId || m.id
    return id === movieId
  })

  const title =
    movie.title.length > 12 ? movie.title.slice(0, 12) + '...' : movie.title

  const releaseYear = movie.releaseYear || movie.release_date.slice(0, 4)
  const imgPath = movie.imgPath || movie.backdrop_path
  const voteAvg = movie.voteAvg || movie.vote_average.toFixed(1)

  const handleWatchlist = () => {
    const movieToAdd = {
      movieId,
      releaseYear,
      imgPath,
      voteAvg,
      title: movie.title
    }

    addedToWatchlist
      ? dispatch(removeWatchlistAction(addedToWatchlist))
      : dispatch(addWatchlistAction(movieToAdd))
  }

  return (
    <Styled.Container>
      <Link to={`/movie/${movieId}`}>
        <Styled.ImageSkeleton imgLoading={imgLoading} />
        <div style={{ display: imgLoading ? 'none' : 'block' }}>
          <img
            src={`${imgURL}/${imgPath}`}
            alt={movie.title}
            onLoad={() => setImgLoading(false)}
          />
        </div>
      </Link>

      <Styled.Title>
        <Styled.TitleLink to={`/movie/${movieId}`} title={movie.title}>
          {title}
        </Styled.TitleLink>
      </Styled.Title>

      <Styled.ReleaseYear>{releaseYear}</Styled.ReleaseYear>

      <Styled.IconsContainer>
        <Styled.Rating>
          <Styled.StarIcon />
          <Styled.RatingText>{voteAvg}</Styled.RatingText>
        </Styled.Rating>

        <Styled.PlaylistIconButton onClick={handleWatchlist}>
          {addedToWatchlist ? (
            <Styled.PlaylistAddedIcon aria-label='remove from watchlist' />
          ) : (
            <Styled.PlaylistAddIcon aria-label='add to watchlist' />
          )}
        </Styled.PlaylistIconButton>
      </Styled.IconsContainer>
    </Styled.Container>
  )
}

MovieItem.propTypes = {
  movieId: PropTypes.number.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    releaseYear: PropTypes.string,
    vote_average: PropTypes.number,
    voteAvg: PropTypes.number,
    backdrop_path: PropTypes.string,
    imgPath: PropTypes.string
  })
}

export default MovieItem
