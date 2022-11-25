import { IUser } from '../../utils/types/user'
import Paper from '../Paper'
import styles from './UserInfo.module.scss'

type Props = {
  user: IUser
}

export default function UserEducation({ user }: Props) {
  return (
    <div className={styles.userInfo}>
      <h2>Education and Employment</h2>
      <div className={styles.userInfo__information}>
        <div className={styles.userInfo__infoGroup}>
          <p>Level of education</p>
          <p>{user?.education.level}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>employment status</p>
          <p>{user?.education.employmentStatus}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>sector of employment</p>
          <p>{user?.education.sector}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>duration of employment</p>
          <p>{user?.education.duration}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>office email</p>
          <p>{user?.education.officeEmail}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>monthly income</p>
          <p>{`₦${user.education.monthlyIncome[1]} - ₦${user.education.monthlyIncome[0]}`}</p>
        </div>
        <div className={styles.userInfo__infoGroup}>
          <p>loan repayment</p>
          <p>{user?.education.loanRepayment}</p>
        </div>
      </div>
    </div>
  )
}
