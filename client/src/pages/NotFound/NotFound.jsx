import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import * as Styled from './NotFound.styles'

const NotFound = ({ text }) => {
  return (
    <Styled.Container>
      <Styled.Text>{text}</Styled.Text>
      <Link to='/'>Back to home</Link>
    </Styled.Container>
  )
}

NotFound.propTypes = {
  text: PropTypes.string.isRequired
}

export default NotFound
