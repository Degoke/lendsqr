import { ReactNode } from 'react'
import styles from './Paper.module.scss'

type Props = {
  children: ReactNode
  className?: string
}

export default function Paper({ children, className }: Props) {
  return <div className={`${styles.paper} ${className}`}>{children}</div>
}
