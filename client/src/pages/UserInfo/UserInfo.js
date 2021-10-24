import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

import NotFound from '../NotFound'
import Loading from '../../components/Loading'

import * as Styled from './UserInfo.styles'
import { deleteAccountAction } from '../../store/auth/actions'

const UserInfo = () => {
  const { user, userLoading, userError } = useSelector(({ auth }) => auth)
  const { movies } = useSelector(({ watchlist }) => watchlist)

  const dispatch = useDispatch()

  const {
    params: { userId }
  } = useRouteMatch('/user/:userId')

  const handleDeleteAccount = () => {
    dispatch(deleteAccountAction(user.id))
  }

  if (userId !== user.id) {
    return <NotFound text='Oops! page not found...' />
  }

  if (userLoading) return <Loading />

  if (userError) return <NotFound text='Something went wrong!' />

  return (
    <Styled.Container>
      <Styled.Label>Name</Styled.Label>
      <Styled.Text>{user.name}</Styled.Text>
      <Styled.Label>Email</Styled.Label>
      <Styled.Text>{user.email}</Styled.Text>
      <Styled.Label>Joined on</Styled.Label>
      <Styled.Text>{user.createdAt.slice(0, 10)}</Styled.Text>
      <Styled.Label>Movies in watchlist</Styled.Label>
      <Styled.Text>{movies.length}</Styled.Text>

      <Styled.DeleteButton onClick={handleDeleteAccount}>
        Delete Account
      </Styled.DeleteButton>
    </Styled.Container>
  )
}

export default UserInfo
