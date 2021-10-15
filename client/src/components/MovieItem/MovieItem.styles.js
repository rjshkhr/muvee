import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { MdPlaylistAdd } from 'react-icons/md'

import mediaQueries from '../../styles/mediaQueries'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body2};
  border-radius: 1em;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 1em;
  transition: transform 0.1s linear;
  width: 12em;

  &:hover {
    transform: translateY(-0.4em);
  }

  ${mediaQueries('sm')} {
    width: 10em;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`

export const Rating = styled.div`
  align-items: center;
  border: 2px solid ${({ theme }) => theme.yellow};
  border-radius: 0.5em;
  display: inline-flex;
  justify-content: center;
  padding: 0.1em 0.5em;
`

export const RatingText = styled.div`
  color: ${({ theme }) => theme.text2};
  font-size: 0.8rem;
  font-weight: 600;
`

export const StarIcon = styled(FaStar)`
  color: ${({ theme }) => theme.yellow};
  font-size: 0.8rem;
  margin-right: 0.2em;
`

export const PlaylistAddIcon = styled(MdPlaylistAdd)`
  cursor: pointer;
  font-size: 1.5rem;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.primary};
  }
`

export const ReleaseYear = styled.p`
  display: inline;
  margin-left: 1em;
`

export const Title = styled.p`
  color: ${({ theme }) => theme.text2};
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 1em;
  text-align: center;
`
