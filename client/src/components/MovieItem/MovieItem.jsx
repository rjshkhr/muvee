import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

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
    movie.title.length > 25 ? movie.title.slice(0, 25) + '...' : movie.title

  const releaseYear = movie.releaseYear || movie.release_date.slice(0, 4)
  const imgPath = movie.imgPath || movie.backdrop_path
  const voteAvg = movie.voteAvg || movie.vote_average

  const handleWatchlist = () => {
    const movieToAdd = {
      movieId,
      releaseYear,
      imgPath,
      voteAvg,
      title: movie.title
    }

    addedToWatchlist
      ? dispatch(removeWatchlistAction(addedToWatchlist.id))
      : dispatch(addWatchlistAction(movieToAdd))
  }

  console.log(imgLoading)

  return (
    <Styled.Container>
      <Styled.ImageSkeleton imgLoading={imgLoading} />
      <div style={{ display: imgLoading ? 'none' : 'block' }}>
        <img
          src={`${imgURL}/${imgPath}`}
          alt={movie.title}
          onLoad={() => setImgLoading(false)}
        />
      </div>

      <Styled.Title>
        <Styled.TitleLink to={`/movie/${movieId}`} title={movie.title}>
          {title} ({releaseYear})
        </Styled.TitleLink>
      </Styled.Title>

      <Styled.IconsContainer>
        <Styled.Rating>
          <Styled.StarIcon />
          <Styled.RatingText>{voteAvg}</Styled.RatingText>
        </Styled.Rating>

        <button onClick={handleWatchlist}>
          {addedToWatchlist ? (
            <Styled.PlaylistAddedIcon aria-label='remove from watchlist' />
          ) : (
            <Styled.PlaylistAddIcon aria-label='add to watchlist' />
          )}
        </button>
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
