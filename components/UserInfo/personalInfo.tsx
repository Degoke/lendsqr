import { IUser } from '../../utils/types/user'
import Paper from '../Paper'
import styles from './UserInfo.module.scss'

type Props = {
  user: IUser
}

export default function PersonalInfo({ user }: Props) {
  return (
    <div className={styles.userInfo}>
      <h2>Personal Information</h2>
      <div className={styles.userInfo__information}>
        <div className={styles.userInfo__infoGroup}>
          <p>Full name</p>
          <p>{`${user?.profile.firstName} ${user?.profile.lastName}`}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>phone number</p>
          <p>{user?.phoneNumber}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>email address</p>
          <p>{user?.email}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>bvn</p>
          <p>{user?.profile.bvn}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>gender</p>
          <p>{user?.profile.gender}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>marital status</p>
          <p>-</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>children</p>
          <p>None</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>Type of Residence</p>
          <p>{user?.profile.address}</p>
        </div>
      </div>
    </div>
  )
}
