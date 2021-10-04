import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('renders Hello World', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('helloWorld')).toHaveTextContent('Hello World')
  })
})
