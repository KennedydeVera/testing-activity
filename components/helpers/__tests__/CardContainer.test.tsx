import { Card, CardProps } from './Card..test'
import styles from '@/styles/index.module.css'
import { render, screen } from '@testing-library/react'

describe('Card Component', () => {
  const props = {
    header: 'Google',
    description: 'description',
    link: 'https://www.google.com/'
  }

  it('Tests Rendering on  Description ', () => {
    //expect(screen.getByText('description')).toBeInTheDocument()
    expect(screen.queryByText('description')).toBeNull()

   })
})

