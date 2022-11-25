import { UserStatus } from '../../utils/types/user'
import styles from './Pill.module.scss'

type Props = {
  type: UserStatus
}

export default function Pill({ type }: Props) {
  return (
    <div className={`${styles.pill} ${styles[type]}`}>
      <p>{type}</p>
    </div>
  )
}
