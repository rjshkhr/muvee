import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body2};
  box-shadow: ${({ theme }) => theme.shadowBottom};
`
export const Header = styled.header`
  align-items: center;
  display: flex;
  height: 6em;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  width: 95%;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`
