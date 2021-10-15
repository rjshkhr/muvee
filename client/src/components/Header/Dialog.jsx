import { BiUser } from 'react-icons/bi'
import { MdDarkMode, MdLogout, MdMovie } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import * as Styled from './Dialog.styles'
import { logoutAction } from '../../store/auth/actions'

const Dialog = ({ theme, toggleTheme }) => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutAction())
  }

  return (
    <Styled.Container>
      <Styled.DialogList>
        <Styled.DialogItem>
          <Styled.DialogLink to='/'>
            <BiUser />
            Profile
          </Styled.DialogLink>
        </Styled.DialogItem>

        <Styled.DialogItem>
          <Styled.DialogLink to='/Watchlist'>
            <MdMovie />
            Watchlist
          </Styled.DialogLink>
        </Styled.DialogItem>

        <Styled.DialogItem>
          <Styled.DialogButton onClick={toggleTheme}>
            <MdDarkMode />
            {theme === 'dark' ? 'Disable' : 'Enable'} Dark Mode
          </Styled.DialogButton>
        </Styled.DialogItem>

        <Styled.DialogItem>
          <Styled.DialogButton onClick={handleLogout}>
            <MdLogout />
            Logout
          </Styled.DialogButton>
        </Styled.DialogItem>
      </Styled.DialogList>
    </Styled.Container>
  )
}

Dialog.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func
}

export default Dialog
