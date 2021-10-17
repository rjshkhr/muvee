import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import MovieList from '../../components/MovieList'
import Loading from '../../components/Loading'
import Button from '../../components/Button'
import NotFound from '../NotFound'

import { getMoviesAction } from '../../store/movies/actions'
import { getWatchlistAction } from '../../store/watchlist/actions'
import * as Styled from './Home.styles'

const Home = () => {
  const dispatch = useDispatch()

  const { movies, moviesLoading, moviesError } = useSelector(
    ({ movieslist }) => movieslist
  )

  const moviesTypes = ['popular', 'toprated', 'nowplaying', 'upcoming']

  const [movieType, setMovieType] = useState('popular')

  useEffect(() => {
    dispatch(getMoviesAction(movieType))
  }, [dispatch, movieType])

  useEffect(() => {
    dispatch(getWatchlistAction())
  }, [dispatch])

  if (moviesLoading) return <Loading />

  if (moviesError) return <NotFound text='Something went wrong!' />

  if (!movies.length) return null

  return (
    <>
      <Styled.MovieTypeContainer>
        {moviesTypes.map((type, index) => (
          <Button
            key={index}
            noBackground={movieType === type ? false : true}
            onClick={() => setMovieType(type)}
          >
            {type}
          </Button>
        ))}
      </Styled.MovieTypeContainer>
      <MovieList movies={movies} />
    </>
  )
}

export default Home
