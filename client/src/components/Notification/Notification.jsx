import { useSelector } from 'react-redux'

import * as Styled from './Notification.styles'

const Notification = () => {
  const { message, status } = useSelector(({ notification }) => notification)

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
