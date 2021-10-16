import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

import NotFound from '../NotFound'

import * as Styled from './UserInfo.styles'

const UserInfo = () => {
  const user = useSelector(({ auth }) => auth.user)

  const {
    params: { userId }
  } = useRouteMatch('/user/:userId')

  if (userId !== user.id) {
    return <NotFound text='Oops! page not found...' />
  }

  return <Styled.Title>{user.name}</Styled.Title>
}

export default UserInfo
