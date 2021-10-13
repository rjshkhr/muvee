import styled from 'styled-components'

export const Container = styled.div`
  height: 6em;
`
export const Header = styled.header`
  align-items: center;
  display: flex;
  height: 6em;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  width: 95%;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`
