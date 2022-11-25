import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'
import Image from 'next/image'
import Layout from '../../components/layout'
import PageTitle from '../../components/PageTitle'
import Paper from '../../components/Paper'
import {
  activateUser,
  blacklistUser,
  getUser,
  selectUser,
} from '../../features/Users/userSlice'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/useRedux'
import FilledStar from '../../public/images/filled_star.svg'
import UnfilledStar from '../../public/images/unfilled_star.svg'
import styles from '../../styles/UserDetails.module.scss'
import { GetStaticPropsContext } from 'next'
import PersonalInfo from '../../components/UserInfo/personalInfo'
import userEducation from '../../components/UserInfo/userEducation'
import UserSocials from '../../components/UserInfo/userSocials'
import UserGuarantor from '../../components/UserInfo/userGuarantor'
import UserEducation from '../../components/UserInfo/userEducation'

function UserDetails() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { pid } = router.query

  const user = useAppSelector(selectUser)

  useEffect(() => {
    if (pid && typeof pid === 'string') {
      dispatch(getUser({ id: pid }))
    }
  }, [pid, dispatch])

  const handleBlacklistUser = () => {
    dispatch(blacklistUser(user?.id))
  }

  const handleActivateUser = () => {
    dispatch(activateUser(user?.id))
  }

  if (!pid) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <div className={styles.userDetails__title}>
        <PageTitle title="User Details" buttonText="Back to users" />
        <div className={styles.userDetails__title_buttons}>
          <button
            className={styles.userDetails__title_buttonRed}
            onClick={handleBlacklistUser}
          >
            Blacklist User
          </button>
          <button
            className={styles.userDetails__title_buttonGreen}
            onClick={handleActivateUser}
          >
            activate User
          </button>
        </div>
      </div>
      <Paper className={styles.userDetails__paper}>
        <div className={styles.userDetails__profile}>
          <div className={styles.userDetails__profile_name}>
            <Image
              className={styles.userDetails__profile_image}
              src={user?.profile.avatar!}
              width={100}
              height={100}
              alt="user"
            />
            <div>
              <span
                className={styles.userDetails__profile_name_span}
              >{`${user?.profile.firstName} ${user?.profile.lastName}`}</span>
              <span className={styles.userDetails__profile_name_spanSmall}>
                {user?.accountNumber}
              </span>
            </div>
          </div>
          <div className={styles.userDetails__profile_tier}>
            <p>{`User's Tier`}</p>
            <div className={styles.userDetails__profile_imageGroup}>
              <Image src={FilledStar} alt="" />
              <Image src={UnfilledStar} alt="" />
              <Image src={UnfilledStar} alt="" />
            </div>
          </div>
          <div className={styles.userDetails__profile_balanceGroup}>
            <span className={styles.userDetails__profile_balance}>
              ₦{user?.accountBalance}
            </span>
            <span className={styles.userDetails__profile_account}>
              {user?.profile.bvn}
            </span>
          </div>
        </div>
        <ul className={styles.userDetails__tabs}>
          <li>General Details</li>
          <li>Documents</li>
          <li>Bank Details</li>
          <li>Loans</li>
          <li>Savings</li>
          <li>App and System</li>
        </ul>
      </Paper>
      <Paper className={styles.paper}>
        <PersonalInfo user={user!} />
        <UserEducation user={user!} />
        <UserSocials user={user!} />
        <UserGuarantor user={user!} />
      </Paper>
    </div>
  )
}

UserDetails.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default UserDetails
