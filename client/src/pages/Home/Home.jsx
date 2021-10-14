import { useDispatch } from 'react-redux'

import Button from "../../components/Button"
import { logoutAction, getNewTokenAction } from  '../../store/auth/actions'

const Home = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutAction())
  }

  const handleGetNew = () => {
    dispatch(getNewTokenAction())
  }

  return (
    <>
      <h2>Home</h2>
      <Button onClick={handleLogout}>Log Out</Button>
      <Button onClick={handleGetNew}>New Token</Button>
    </>
  )
}

export default Home
