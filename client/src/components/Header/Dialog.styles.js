import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const dialogAnim = keyframes`
  from {
    right: -3em;
  }

  to {
    right: 0;
  }
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body2};
  border-radius: 1em;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 2em 1.5em;
  position: absolute;
  right: 0;
  top: 6em;
  z-index: 2;
  animation: ${dialogAnim} 0.2s;
`

export const DialogList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const DialogItem = styled.li`
  color: ${({ theme }) => theme.text2};
  cursor: pointer;
  line-height: 1.1;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.primary};
  }

  svg {
    background: none;
  }
`

export const DialogLink = styled(Link)`
  align-item: center;
  color: ${({ theme }) => theme.text};
  display: flex;
  gap: 0.5em;
  padding: 0.5em;
  margin: 0.2em 0;
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.primary3};
    color: inherit;
  }

  &::before {
    display: none;
  }
`

export const DialogButton = styled.button`
  color: ${({ theme }) => theme.text};
  width: 100%;
  align-item: center;
  font-size: inherit;
  font-weight: inherit;
  display: flex;
  gap: 0.5em;
  padding: 0.5em;
  margin: 0.2em 0;
  line-height: 1.1;

  &:hover {
    background-color: ${({ theme }) => theme.primary3};
    color: inherit;
  }
`
