import { BiUser } from 'react-icons/bi'
import { MdDarkMode, MdLogout, MdMovie } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import * as Styled from './Dialog.styles'
import { logoutAction } from '../../store/auth/actions'
import { setNotificationAction } from '../../store/notification/actions'

const Dialog = ({ theme, toggleTheme }) => {
  const user = useSelector(({ auth }) => auth.user)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutAction())
  }

  const handleToggleTheme = () => {
    toggleTheme()
    const mode = theme === 'dark' ? 'light' : 'dark'
    dispatch(setNotificationAction(`Enabled ${mode} mode`, 'info'))
  }

  return (
    <Styled.Container>
      <Styled.DialogList>
        <Styled.DialogItem>
          <Styled.DialogLink to={`/user/${user.id}`}>
            <BiUser />
            Profile
          </Styled.DialogLink>
        </Styled.DialogItem>

        <Styled.DialogItem>
          <Styled.DialogLink to='/watchlist'>
            <MdMovie />
            Watchlist
          </Styled.DialogLink>
        </Styled.DialogItem>

        <Styled.DialogItem>
          <Styled.DialogButton onClick={handleToggleTheme}>
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
