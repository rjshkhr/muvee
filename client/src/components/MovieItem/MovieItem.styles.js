import styled, { css, keyframes } from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { MdPlaylistAdd, MdPlaylistAddCheck } from 'react-icons/md'
import { Link } from 'react-router-dom'

import mediaQueries from '../../styles/mediaQueries'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body2};
  border-radius: 1.5em;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 1em;
  transition: transform 0.1s linear;
  flex: 0 0 12em;

  ${mediaQueries('sm')} {
    flex: 0 0 10em;
  }

  &:hover {
    transform: translateY(-0.3em);
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
  border-radius: 1em;
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
  margin-top: 0.8em;
`

export const Rating = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.yellowBody};
  border-radius: 1em;
  display: inline-flex;
  justify-content: center;
  padding: 0.1em 0.5em;
`

export const RatingText = styled.div`
  color: ${({ theme }) => theme.yellowText};
  background: transparent;
  font-size: 0.8rem;
  font-weight: 600;
`

export const StarIcon = styled(FaStar)`
  color: ${({ theme }) => theme.yellowText};
  background: transparent;
  font-size: 0.8rem;
  margin-right: 0.2em;
`

const playlistIcon = css`
  font-size: 1.5rem;
`

export const PlaylistIconButton = styled.button`
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

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.8em;
  text-align: center;

  ${mediaQueries('sm')} {
    font-size: 0.9rem;
  }
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

export const ReleaseYear = styled.p`
  color: ${({ theme }) => theme.text3};
  font-size: 0.8rem;
  font-style: italic;
  font-weight: 600;
  margin-top: 0.4em;
  text-align: center;
`
