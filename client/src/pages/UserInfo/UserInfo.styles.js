import styled from 'styled-components'

import Button from '../../components/Button'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body2};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 1em;
  max-width: 30em;
  margin: 2em auto;
  padding: 2em;
`

export const Label = styled.p`
  color: ${({ theme }) => theme.text3};
  font-size: 0.8rem;
`

export const Text = styled.p`
  color: ${({ theme }) => theme.text2};
  margin-bottom: 1em;
`

export const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.errorBody};
  color: ${({ theme }) => theme.errorText};

  &:hover {
    background-color: ${({ theme }) => theme.errorText};
  }
`
