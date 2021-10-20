import styled, { css } from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { BiCalendar } from 'react-icons/bi'
import { MdAccessTimeFilled } from 'react-icons/md'

import mediaQueries from '../../styles/mediaQueries'

export const MovieImage = styled.img`
  box-shadow: ${({ theme }) => theme.shadow};
`

export const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme.body2};
  border-radius: 1em;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em;
  width: 50em;
  margin: 0 auto -10em auto;
  transform: translateY(-50%);

  ${mediaQueries('lg')} {
    transform: translateY(0);
    width: 100%;
    background-color: initial;
    box-shadow: none;
    padding: 0;
    margin: 2em auto;
  }
`

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
`

export const Tagline = styled.p`
  color: ${({ theme }) => theme.text3};
  font-style: italic;
  margin-top: 1em;
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 0.5em;
  margin-top: 2em;
`

export const iconContainer = css`
  align-items: center;
  border-radius: 1em;
  display: inline-flex;
  justify-content: center;
  padding: 0.2em 0.6em;
`

export const icon = css`
  background: transparent;
  font-size: 0.9rem;
  margin-right: 0.5em;
  margin-bottom: 0.1em;
`

export const Rating = styled.div`
  ${iconContainer}
  background-color: ${({ theme }) => theme.yellowBody};
`

export const RatingText = styled.div`
  color: ${({ theme }) => theme.yellowText};
  background: transparent;
  font-size: 0.9rem;
  font-weight: 600;
`

export const StarIcon = styled(FaStar)`
  ${icon}
  color: ${({ theme }) => theme.yellowText};
`

export const ReleaseDate = styled.div`
  ${iconContainer}
  background-color: ${({ theme }) => theme.errorBody};
`

export const ReleaseDateText = styled.div`
  color: ${({ theme }) => theme.errorText};
  background: transparent;
  font-size: 0.9rem;
  font-weight: 600;
`

export const CalendarIcon = styled(BiCalendar)`
  ${icon}
  color: ${({ theme }) => theme.errorText};
`

export const Runtime = styled.div`
  ${iconContainer}
  background-color: ${({ theme }) => theme.greenBody};
`

export const RuntimeText = styled.div`
  color: ${({ theme }) => theme.greenText};
  background: transparent;
  font-size: 0.9rem;
  font-weight: 600;
`

export const TimeIcon = styled(MdAccessTimeFilled)`
  ${icon}
  color: ${({ theme }) => theme.greenText};
`

export const GenreList = styled.ul`
  display: flex;
  margin-top: 1em;
  gap: 0.5em;
`

export const GenreItem = styled.li`
  padding: 0.2em 0.6em;
  background-color: ${({ theme }) => theme.primary3};
  border-radius: 1em;
  color: ${({ theme }) => theme.primary};
  font-size: 0.9rem;
  font-weight: 600;
`

export const Overview = styled.p`
  color: ${({ theme }) => theme.text3};
  margin-top: 2em;
  line-height: 1.8;
`

export const MovieList = styled.div`
  display: flex;
  gap: 1em;
  padding: 1.5em 0;
  margin-bottom: 2em;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
