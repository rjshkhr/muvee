import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body2};
  height: auto;
  min-height: calc(100vh - 6em);
  left: 0;
  position: absolute;
  right: 0;
`
