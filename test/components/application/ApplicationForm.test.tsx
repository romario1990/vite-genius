import React from 'react';
import { render, screen } from '@testing-library/react'
import ApplicationForm from '../../../src/components/application/ApplicationForm';


test('render correctly', () => {
  render(<ApplicationForm />)
  
  const titleElement = screen.getByRole('heading')
  expect(titleElement).toBeInTheDocument()

  const paragraphElement = screen.getByText('All fields are mandatory')
  expect(paragraphElement).toBeInTheDocument()

  const customElement = screen.getByTestId('custom-element')
  expect(customElement).toBeInTheDocument()
})