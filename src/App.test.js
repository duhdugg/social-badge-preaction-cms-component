import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders', () => {
  const { getAllByText } = render(<App />)
  const els = getAllByText(/Hello/i)
  expect(els.length).toBe(2)
  expect(els[0]).toBeInTheDocument()
  expect(els[1]).toBeInTheDocument()
})
