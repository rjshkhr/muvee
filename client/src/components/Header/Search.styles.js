import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

import mediaQueries from '../../styles/mediaQueries'

export const FormGroup = styled.div`
  position: relative;
`

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.body};
  font-size: 0.9rem;
  padding: 0.6em 0.6em 0.6em 2.2em;
  border-radius: 0.5em;
  width: 17em;

  &:focus,
  &:hover,
  &:active {
    border: 2px solid ${({ theme }) => theme.primary};
  }

  ${mediaQueries('sm')} {
    width: 11em;
  }
`

export const SearchIcon = styled(FiSearch)`
  background: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  position: absolute;
  top: 0.5em;
  left: 0.5em;
  cursor: pointer;
`
