import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

import NotFound from '../NotFound'
import Loading from '../../components/Loading'

import * as Styled from './UserInfo.styles'

const UserInfo = () => {
  const { user, userLoading, userError } = useSelector(({ auth }) => auth)

  const {
    params: { userId }
  } = useRouteMatch('/user/:userId')

  if (userId !== user.id) {
    return <NotFound text='Oops! page not found...' />
  }

  if (userLoading) return <Loading />

  if (userError) return <NotFound text='Something went wrong!' />

  return <Styled.Title>{user.name}</Styled.Title>
}

export default UserInfo
