import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={`${styles.bn632Hover} ${styles.bn20}`} onClick={onClick}>
      {children}
    </button>
  )
}
