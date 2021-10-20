import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

import Loading from '../../components/Loading'
import MovieItem from '../../components/MovieItem'
import NotFound from '../NotFound'

import {
  getDetailsActions,
  getReviewsAction,
  getSimilarAction,
  getRecommendedAction
} from '../../store/movies/actions'
import * as Styled from './MovieInfo.style'

const imgURL = 'https://image.tmdb.org/t/p/original'

const MovieInfo = () => {
  const movieslist = useSelector(({ movieslist }) => movieslist)

  const {
    params: { movieId }
  } = useRouteMatch('/movie/:movieId')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetailsActions(movieId))
    dispatch(getReviewsAction(movieId))
    dispatch(getSimilarAction(movieId))
    dispatch(getRecommendedAction(movieId))
  }, [dispatch, movieId])

  console.log(movieslist)

  if (movieslist.detailsLoading) return <Loading />

  if (movieslist.detailsError) {
    return <NotFound text='Something went wrong!' />
  }

  if (!movieslist.details) return null

  return (
    <>
      <Styled.MovieImage
        src={`${imgURL}/${movieslist.details?.backdrop_path}`}
        alt={movieslist.details.title}
      />
      <Styled.InfoContainer>
        <Styled.Title>{movieslist.details.title}</Styled.Title>

        {movieslist.details.tagline ? (
          <Styled.Tagline>- {movieslist.details.tagline}</Styled.Tagline>
        ) : null}

        <Styled.IconsContainer>
          <Styled.Rating>
            <Styled.StarIcon />
            <Styled.RatingText>
              {movieslist.details?.vote_average}
            </Styled.RatingText>
          </Styled.Rating>

          <Styled.ReleaseDate>
            <Styled.CalendarIcon />
            <Styled.ReleaseDateText>
              {movieslist.details?.release_date}
            </Styled.ReleaseDateText>
          </Styled.ReleaseDate>

          <Styled.Runtime>
            <Styled.TimeIcon />
            <Styled.RuntimeText>
              {movieslist.details?.runtime} minutes
            </Styled.RuntimeText>
          </Styled.Runtime>
        </Styled.IconsContainer>

        <Styled.GenreList>
          {movieslist.details?.genres?.length &&
            movieslist.details.genres.map(genre => (
              <Styled.GenreItem key={genre.id}>{genre.name}</Styled.GenreItem>
            ))}
        </Styled.GenreList>

        <Styled.Overview>{movieslist.details?.overview}</Styled.Overview>
      </Styled.InfoContainer>

      {movieslist.similar.length ? (
        <>
          <h3>Similar movies</h3>
          <Styled.MovieList>
            {movieslist.similar.map(movie => (
              <MovieItem key={movie.id} movieId={movie.id} movie={movie} />
            ))}
          </Styled.MovieList>
        </>
      ) : null}

      {movieslist.recommended.length ? (
        <>
          <h3>Recommended movies</h3>
          <Styled.MovieList>
            {movieslist.recommended.map(movie => (
              <MovieItem key={movie.id} movieId={movie.id} movie={movie} />
            ))}
          </Styled.MovieList>
        </>
      ) : null}
    </>
  )
}

export default MovieInfo
