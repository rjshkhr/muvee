import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import * as Styled from './Header.styles'

import Navbar from './Navbar'

const Header = ({ theme, toggleTheme }) => (
  <Styled.Container>
    <Styled.Header>
      <Styled.Title>
        <Link to='/'>Muvee</Link>
      </Styled.Title>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
    </Styled.Header>
  </Styled.Container>
)

Header.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func
}

export default Header
