import { useState } from 'react'
import PropTypes from 'prop-types'
import { MdClose, MdDarkMode, MdLightMode, MdMenu } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'

import * as Styled from './Navbar.styles'

const Navbar = ({ theme, toggleTheme }) => {
  const [showList, setShowList] = useState(false)

  const toggleShowList = () => setShowList(prev => !prev)

  return (
    <Styled.Nav>
      <Styled.NavList showList={showList}>
        <Styled.NavItem>
          <Styled.Link to='/' exact activeClassName='selected'>
            Home
          </Styled.Link>
        </Styled.NavItem>

        <Styled.NavItem>
          <Styled.Link to='/watchlist' activeClassName='selected'>
            Watchlist
          </Styled.Link>
        </Styled.NavItem>
      </Styled.NavList>

      <Styled.ThemeToggleButton onClick={toggleTheme} aria-label='change theme'>
        {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
      </Styled.ThemeToggleButton>

      <Styled.NavListToggleButton
        onClick={toggleShowList}
        aria-label='display nav list'
      >
        {showList ? <MdClose /> : <MdMenu />}
      </Styled.NavListToggleButton>

      <Styled.ProfileIconLink to='/' aria-label='go to user profile'>
        <BiUser />
      </Styled.ProfileIconLink>
    </Styled.Nav>
  )
}

Navbar.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func
}

export default Navbar
