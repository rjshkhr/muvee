import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

import mediaQueries from '../../styles/mediaQueries'

const center = css`
  display: flex;
  align-items: center;
`

export const Nav = styled.nav`
  ${center}
`

export const NavList = styled.ul`
  ${center}

  ${mediaQueries('md')} {
    background-color: ${({ theme }) => theme.body2};
    box-shadow: ${({ theme }) => theme.shadowBottom};
    flex-direction: column;
    left: 0;
    margin: 0;
    overflow: hidden;
    padding: 2em 0;
    position: absolute;
    right: 0;
    top: 6em;
    transition: width 0.3s ease-in-out;
    width: ${({ showList }) => (showList ? '100%' : '0')};
    z-index: 1;
  }
`

export const NavListToggleButton = styled.button`
  display: none;

  ${mediaQueries('md')} {
    ${center}
    font-size: 1.5rem;
    margin-left: 0.5em;
  }
`

export const NavItem = styled.li`
  margin-right: 1em;

  ${mediaQueries('md')} {
    margin: 0.5em 0;
  }
`

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  font-weight: 600;

  &.selected,
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

export const ThemeToggleButton = styled.button`
  ${center}
  font-size: 1.5rem;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  display: flex;
  justify-content: center;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.primary3};
    color: ${({ theme }) => theme.primary};
  }

  svg {
    background: none;
  }
`

export const ProfileIconButton = styled.button`
  ${center}
  background-color: ${({ theme }) => theme.primary};
  border-radius: 0.5em;
  color: #fff;
  font-size: 1.5rem;
  margin-left: 0.5em;
  padding: 0.3em;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.primary2};
  }
`
