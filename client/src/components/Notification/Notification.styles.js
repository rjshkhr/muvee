import styled, { css } from 'styled-components'
import { MdOutlineError, MdInfo, MdOutlineDone } from 'react-icons/md'

import mediaQueries from '../../styles/mediaQueries'

export const Container = styled.div`
  position: fixed;
  top: 1em;
  right: 1em;
  width: 20em;
  min-height: 5em;
  display: flex;
  align-items: center;
  z-index: 1;
  background-color: ${({ theme }) => theme.body2};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 0.4em;
  padding: 1em;

  color: ${({ status }) =>
    status === 'error'
      ? props => props.theme.errorText
      : status === 'info'
      ? props => props.theme.primary
      : props => props.theme.green}};

  ${mediaQueries('sm')} {
    margin: 0 auto;
    botttom: 0;
    right: 0;
    left: 0;
    width: 95%;
  }
`

export const Text = styled.p`
  flex-basis: 90%;
  line-height: 1.6;

  ${mediaQueries('sm')} {
    font-size: 0.9rem;
  }
`

const icon = css`
  font-size: 1.5rem;
  margin-right: 0.5em;
`

export const InfoIcon = styled(MdInfo)`
  ${icon}
`

export const SuccessIcon = styled(MdOutlineDone)`
  ${icon}
  font-size: 1.2rem;
  border-radius: 50%;
  padding: 0.2em;
  color: #fff;

  background-color: ${({ status }) =>
    status === 'error'
      ? props => props.theme.errorText
      : status === 'info'
      ? props => props.theme.yellow
      : props => props.theme.green}};
`

export const ErrorIcon = styled(MdOutlineError)`
  ${icon}
`
