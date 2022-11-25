import { IUser } from '../../utils/types/user'
import Paper from '../Paper'
import styles from './UserInfo.module.scss'

type Props = {
  user: IUser
}

export default function UserSocials({ user }: Props) {
  return (
    <div className={styles.userInfo}>
      <h2>Socials</h2>
      <div className={styles.userInfo__information}>
        <div className={styles.userInfo__infoGroup}>
          <p>Twitter</p>
          <p>{user?.socials.twitter}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>Facebook</p>
          <p>{user?.socials.facebook}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>Instagram</p>
          <p>{user?.socials.instagram}</p>
        </div>
      </div>
    </div>
  )
}
