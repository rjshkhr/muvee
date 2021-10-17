import PropTypes from 'prop-types'

import Button from '../Button'

import * as Styled from './Pagination.styles'

const Pagination = ({ page, totalPages, handleChangePage }) => {
  return (
    <Styled.Container>
      <Button
        onClick={() => handleChangePage(page + 1)}
        noBackground
        disabled={page === 1}
      >
        &lt;
      </Button>

      <Button
        onClick={() => handleChangePage(1)}
        noBackground
        disabled={page === 1}
      >
        1
      </Button>

      {page >= 5 && <span>...</span>}

      <Button
        onClick={() => handleChangePage(totalPages)}
        noBackground
        disabled={page === totalPages}
      >
        {totalPages}
      </Button>

      <Button
        onClick={() => handleChangePage(page + 1)}
        noBackground
        disabled={page === totalPages}
      >
        &gt;
      </Button>
    </Styled.Container>
  )
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired
}

export default Pagination
