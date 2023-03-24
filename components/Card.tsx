import styles from '@/styles/index.module.css'
import { render, screen } from '@testing-library/react'
export interface CardProps {
  header: string
  description: string
  link: string
}

export const Card: React.FC<CardProps> = ({ header, description, link }) => {
  return (
    <a aria-label='card' href={link} className={styles.card}>
      <h3>{header}</h3>
      <p>{description}</p>
    </a>
  )

    expect(screen.getByRole('heading')).toHaveTextContent('Documentation')
}
