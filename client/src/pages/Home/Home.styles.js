import styled, { css } from 'styled-components'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'

import mediaQueries from '../../styles/mediaQueries'

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MovieTypeContainer = styled.div`
  ${center}
  margin: 2em 0;
  gap: 0.4em;
  flex-wrap: wrap;
`

export const MoviePaginateContainer = styled.div`
  margin: 2em auto;

  .pagination {
    ${center}
    gap: 0.5em;

    ${mediaQueries('sm')} {
      gap: 0.2em;
      font-size: 0.9rem;
    }

    li {
      ${center}
      cursor: pointer;
      border-radius: 0.5em;
      width: 3em;
      height: 3em;

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.primary3};
        color: ${({ theme }) => theme.primary};
      }

      ${mediaQueries('xs')} {
        font-size: 0.7rem;
      }
    }

    a {
      color: inherit;
      background: none;

      &:before {
        display: none;
      }
    }

    .active {
      background-color: ${({ theme }) => theme.primary};
      color: #fff;
    }

    .disabled {
      display: none;
    }
  }
`

export const PrevPageIcon = styled(MdOutlineNavigateBefore)`
  font-size: 1.4rem;
  margin-top: 0.3em;
`

export const NextPageIcon = styled(MdOutlineNavigateNext)`
  font-size: 1.4rem;
  margin-top: 0.2em;
`
