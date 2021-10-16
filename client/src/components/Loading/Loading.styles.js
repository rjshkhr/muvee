import styled from 'styled-components'

export const Svg = styled.svg`
  width: 3.5em;
  height: 3.5em;
  display: flex;
  margin: auto;
  height: calc(100vh - 8em);
`

export const Circle = styled.circle`
  stroke: ${({ theme }) => theme.primary};
  stroke-width: 10;
`
