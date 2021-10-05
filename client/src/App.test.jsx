import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('renders Loading... on mount', async () => {
    const { getByTestId } = render(<App />)

    const loading = getByTestId('loading')
    expect(loading).toHaveTextContent('Loading...')
  })
})
