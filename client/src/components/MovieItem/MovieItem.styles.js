import styled, { css, keyframes } from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { MdPlaylistAdd, MdPlaylistAddCheck } from 'react-icons/md'
import { Link } from 'react-router-dom'

import mediaQueries from '../../styles/mediaQueries'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body2};
  border-radius: 1em;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 1em;
  transition: transform 0.1s linear;
  width: 12em;

  &:hover {
    transform: translateY(-0.3em);
  }

  ${mediaQueries('sm')} {
    width: 10em;
  }
`

export const skeleton = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0.6;
  }
`

export const ImageSkeleton = styled.div`
  background-color: ${({ theme }) => theme.body};
  animation: ${skeleton} 0.8s ease infinite alternate;
  border-radius: 0.5em;
  display: ${({ imgLoading }) => (imgLoading ? 'block' : 'none')};
  height: 90px;
  width: 160px;

  ${mediaQueries('sm')} {
    height: 72px;
    width: 128px;
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

const playlistIcon = css`
  font-size: 1.5rem;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.primary};
  }
`

export const PlaylistAddIcon = styled(MdPlaylistAdd)`
  ${playlistIcon}
`

export const PlaylistAddedIcon = styled(MdPlaylistAddCheck)`
  ${playlistIcon}
`

export const ReleaseYear = styled.p`
  display: inline;
  margin-left: 1em;
`

export const Title = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 1em;
  text-align: center;
`

export const TitleLink = styled(Link)`
  color: ${({ theme }) => theme.text2};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.primary};
  }

  &:active {
    color: ${({ theme }) => theme.primary2};
  }

  &::before {
    display: none;
  }
`
