import { IUser } from '../../utils/types/user'
import Paper from '../Paper'
import styles from './UserInfo.module.scss'

type Props = {
  user: IUser
}

export default function UserGuarantor({ user }: Props) {
  return (
    <div className={styles.userInfo}>
      <h2>Guarantor</h2>
      <div className={styles.userInfo__information}>
        <div className={styles.userInfo__infoGroup}>
          <p>Full name</p>
          <p>{`${user?.guarantor.firstName} ${user?.guarantor.lastName}`}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>phone number</p>
          <p>{user?.guarantor.phoneNumber}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>email address</p>
          <p>{user?.guarantor.address}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>relationship</p>
          <p>{user?.guarantor.gender}</p>
        </div>
      </div>
    </div>
  )
}
