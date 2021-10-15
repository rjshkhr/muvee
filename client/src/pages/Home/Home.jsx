import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MovieItem from '../../components/MovieItem'

import { getPopularAction } from '../../store/movies/actions'
import * as Styled from './Home.styles'

const Home = () => {
  const dispatch = useDispatch()

  const popularMovies = useSelector(({ movies }) => movies.popular)

  useEffect(() => {
    dispatch(getPopularAction())
  }, [dispatch])

  return (
    <Styled.MovieList>
      {popularMovies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Styled.MovieList>
  )
}

export default Home
