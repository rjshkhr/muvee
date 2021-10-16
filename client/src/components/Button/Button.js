import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 0.5em;
  color: #fff;
  font-weight: 600;
  padding: 1em 1.5em;
  text-transform: capitalize;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.primary2};
  }
`

export default Button
