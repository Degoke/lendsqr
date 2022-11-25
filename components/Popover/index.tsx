import { ReactNode } from 'react'
import Paper from '../Paper'
import styles from './Popover.module.scss'

type Props = {
  isOpen: boolean
  children: ReactNode
  className?: string
}

export default function Popover({ isOpen, className, children }: Props) {
  return (
    <div className={`${styles.popover} ${className}`}>
      {isOpen ? <Paper>{children}</Paper> : null}
    </div>
  )
}
