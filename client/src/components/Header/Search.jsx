import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import * as Styled from './Search.styles'
import { getMoviesByQueryAction } from '../../store/movies/actions'

const Search = () => {
  const [searchVal, setSearchVal] = useState('')

  const dispatch = useDispatch()

  const history = useHistory()

  const handleSearchSubmit = e => {
    e.preventDefault()
    dispatch(getMoviesByQueryAction(searchVal))
    history.push(`/search/${searchVal}`)
    setSearchVal('')
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <Styled.FormGroup>
        <Styled.SearchIcon />
        <Styled.Input
          type='text'
          value={searchVal}
          onChange={({ target }) => setSearchVal(target.value)}
          placeholder='Search movie'
        />
      </Styled.FormGroup>
    </form>
  )
}

export default Search
