import { useSelector } from 'react-redux'

import Loading from '../../components/Loading'
import MovieList from '../../components/MovieList'
import NotFound from '../NotFound'

const MovieSearch = () => {
  const { search, searchError, searchLoading } = useSelector(
    ({ movieslist }) => movieslist
  )

  if (searchLoading) return <Loading />

  if (searchError || !search.length) {
    return <NotFound text='Movie not found' />
  }

  return <MovieList movies={search} />
}

export default MovieSearch
