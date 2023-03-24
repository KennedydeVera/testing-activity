import styles from '@/styles/index.module.css'
import { render, screen } from '@testing-library/react'
import { Card } from "@/components/index"

describe('Card', () => {
  it('tests rendering', () => {
  render(
    <Card
      header= 'Test header'
      description= 'description'
      link= '/card-link'
    ></Card>
  )
    expect(screen.getByText('Test header')).toBeInTheDocument()
    expect(screen.getByText('description')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/card-link');

  })
})
 
