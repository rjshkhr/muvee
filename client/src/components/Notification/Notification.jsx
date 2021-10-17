import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as Styled from './Notification.styles'
import { removeNotificationAction } from '../../store/notification/actions'

const Notification = () => {
  const dispatch = useDispatch()

  const { message, status } = useSelector(({ notification }) => notification)

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(removeNotificationAction())
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [dispatch])

  if (!message) return null

  return (
    <Styled.Container status={status}>
      {status === 'error' ? (
        <Styled.ErrorIcon />
      ) : status === 'info' ? (
        <Styled.InfoIcon />
      ) : (
        <Styled.SuccessIcon />
      )}

      <Styled.Text>{message}</Styled.Text>
    </Styled.Container>
  )
}

export default Notification
