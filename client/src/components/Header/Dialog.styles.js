import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body2};
  border-radius: 0.5em;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 2em;
  position: absolute;
  right: 0;
  top: 6em;
  z-index: 2;
`

export const DialogList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const DialogItem = styled.li`
  color: ${({ theme }) => theme.text2};
  cursor: pointer;

  &:hover, &:focus {
    color: ${({ theme }) => theme.primary};
  }
`

export const DialogLink = styled(Link)`
  align-item: center;
  color: ${({ theme }) => theme.text2};
  display: flex;
  gap: 0.5em;
  margin: 0.5em 0;

  &:hover, &:focus {
    color: inherit;
  }

  &::before {
    display: none;
  }
`

export const DialogButton = styled.button`
  align-item: center;
  font-size: inherit;
  font-weight: inherit;
  display: flex;
  gap: 0.5em;
  margin: 0.5em 0;

  &:hover {
    background-color: inherit;
    color: inherit;
  }
`
