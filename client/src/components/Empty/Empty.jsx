import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import * as Styled from './Empty.styles'

const Empty = ({ text }) => {
  return (
    <Styled.Container>
      <Styled.Text>{text}</Styled.Text>
      <Link to='/'>Back to home</Link>
    </Styled.Container>
  )
}

Empty.propTypes = {
  text: PropTypes.string
}

export default Empty
