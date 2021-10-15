import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { MdClose, MdDarkMode, MdLightMode, MdMenu } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'

import Dialog from './Dialog'

import * as Styled from './Navbar.styles'
import useClickOutside from '../../hooks/useClickOutside'

const Navbar = ({ theme, toggleTheme }) => {
  const [showList, setShowList] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  const navbarRef = useRef()
  const profileRef = useRef()

  const user = useSelector(({ auth }) => auth.user)

  const toggleShowList = () => {
    setShowList(prev => !prev)
  }

  const toggleDialog = () => {
    setShowDialog(prev => !prev)
  }

  useClickOutside(navbarRef, () => {
    if (showList) setShowList(false)
  })

  useClickOutside(profileRef, () => {
    if (showDialog) setShowDialog(false)
  })

  return (
    <Styled.Nav>
      {user ? (
        <>
          <Styled.ProfileIconButton
            onClick={toggleDialog}
            ref={profileRef}
            aria-label='toggle dialog'
          >
            <BiUser />
          </Styled.ProfileIconButton>
          {showDialog && <Dialog theme={theme} toggleTheme={toggleTheme} />}
        </>
      ) : (
        <>
          <Styled.NavList showList={showList} ref={navbarRef}>
            <Styled.NavItem>
              <Styled.Link to='/login' exact activeClassName='selected'>
                Log In
              </Styled.Link>
            </Styled.NavItem>

            <Styled.NavItem>
              <Styled.Link to='/register' activeClassName='selected'>
                Register
              </Styled.Link>
            </Styled.NavItem>
          </Styled.NavList>

          <Styled.ThemeToggleButton
            onClick={toggleTheme}
            aria-label='change theme'
          >
            {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
          </Styled.ThemeToggleButton>

          <Styled.NavListToggleButton
            onClick={toggleShowList}
            aria-label='display nav list'
          >
            {showList ? <MdClose /> : <MdMenu />}
          </Styled.NavListToggleButton>
        </>
      )}
    </Styled.Nav>
  )
}

Navbar.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func
}

export default Navbar
