import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

import MovieList from '../../components/MovieList'
import Loading from '../../components/Loading'
import Button from '../../components/Button'
import NotFound from '../NotFound'

import { getMoviesAction } from '../../store/movies/actions'
import { getWatchlistAction } from '../../store/watchlist/actions'
import * as Styled from './Home.styles'

const Home = () => {
  const dispatch = useDispatch()

  const moviesList = useSelector(({ movieslist }) => movieslist)

  const moviesTypes = ['popular', 'toprated', 'nowplaying', 'upcoming']

  const [movieType, setMovieType] = useState('popular')

  useEffect(() => {
    dispatch(getMoviesAction(movieType))
  }, [dispatch, movieType])

  useEffect(() => {
    dispatch(getWatchlistAction())
  }, [dispatch])

  const handlePageChange = ({ selected }) => {
    dispatch(getMoviesAction(movieType, selected + 1))
  }

  if (moviesList.moviesLoading) return <Loading />

  if (moviesList.moviesError) return <NotFound text='Something went wrong!' />

  if (!moviesList.movies.length) return null

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

      <MovieList movies={moviesList.movies} />

      <Styled.MoviePaginateContainer>
        <ReactPaginate
          pageCount={moviesList.totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          previousLabel={<Styled.PrevPageIcon />}
          nextLabel={<Styled.NextPageIcon />}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          disabledClassName={'disabled'}
          forcePage={moviesList.page - 1}
        />
      </Styled.MoviePaginateContainer>
    </>
  )
}

export default Home
