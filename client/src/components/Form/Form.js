import styled, { css } from 'styled-components'
import { MdLock, MdOutlineEmail } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'

import mediaQueries from '../../styles/mediaQueries'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body2};
  border-radius: 0.5em;
  box-shadow: ${({ theme }) => theme.shadow};
  margin: 3em auto;
  max-width: 30em;
  padding: 3em 4em;
  width: 95%;

  ${mediaQueries('md')} {
    padding: 2em;
  }
`

export const Heading = styled.h2`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1em;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
`

export const Form = styled.form`
  margin-top: 2em;
`

export const FormGroup = styled.div`
  margin-bottom: 2.5em;
  position: relative;
`

export const Input = styled.input`
  border-bottom: 2px solid ${({ theme }) => theme.border};
  font-size: inherit;
  padding: 0.5em;
  padding-left: 2em;
  width: 100%;

  &:focus,
  &:hover,
  &:active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`

const icon = css`
  color: ${({ theme }) => theme.primary};
  font-size: 1.4rem;
  position: absolute;
  top: 0.25em;
`

export const UserIcon = styled(BiUser)`
  ${icon}
`

export const EmailIcon = styled(MdOutlineEmail)`
  ${icon}
`

export const PasswordIcon = styled(MdLock)`
  ${icon}
`

export const Text = styled.p`
  font-size: 0.9rem;
  margin-top: 2em;
  text-align: center;
`

export const Error = styled.p`
  align-items: center;
  background-color: ${({ theme }) => theme.errorBody};
  border: 2px solid ${({ theme }) => theme.errorText};
  border-radius: 0.5em;
  color: ${({ theme }) => theme.errorText};
  display: flex;
  font-size: 0.9rem;
  line-height: 2;
  justify-content: center;
  margin-bottom: 2em;
  text-align: center;
`
