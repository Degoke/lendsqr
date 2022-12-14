import { ChangeEvent, ReactElement, useEffect, useState } from 'react'
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import UsersIcon from '../public/images/users_card_icon.svg'
import ActiveIcon from '../public/images/active_users_card_icon.svg'
import LoansIcon from '../public/images/loan_card_icon.svg'
import SavingsIcon from '../public/images/savings_card_icon.svg'
import Card from '../components/Card'
import Paper from '../components/Paper'
import Table from '../components/Table'
import { GetStaticPropsContext } from 'next'
import { mockUser } from '../utils/data/user'
import styles from '../styles/Users.module.scss'
import { useAppDispatch, useAppSelector } from '../utils/hooks/useRedux'
import {
  getUsers,
  selectActiveUsers,
  selectTotalUnfilteredUsers,
  selectTotalUsers,
  selectUsers,
  selectUserStatus,
  selectUsersWithLoans,
} from '../features/Users/userSlice'
import Pagination from '../components/Pagination'
import { updateCurrentStatusMenu } from '../features/helpers/helperSlice'
import { STATUS } from '../utils/types/status'
import Spinner from '../components/Spinner'
import FilterMenu from '../components/FilterMenu'

function Users() {
  const [numberPerPage, setNumberPerPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(1)

  const [openMenu, setOpenMenu] = useState(false)

  const toggleFilterMenu = () => {
    setOpenMenu(!openMenu)
  }

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUsers())
    dispatch(updateCurrentStatusMenu(''))
  }, [dispatch])

  const users = useAppSelector((state) =>
    selectUsers(state, {
      numberPerPage,
      currentPage,
    })
  )

  const totalUsers = useAppSelector(selectTotalUsers)
  const totalUnfilterdUsers = useAppSelector(selectTotalUnfilteredUsers)
  const activeUsers = useAppSelector(selectActiveUsers)
  const usersWithLoans = useAppSelector(selectUsersWithLoans)

  const userStatus = useAppSelector(selectUserStatus)

  const changeNumberPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    setNumberPerPage(Number(e.currentTarget.value))
  }

  const changeCurrentPage = (page: number) => {
    setCurrentPage(page)
  }

  const cards = [
    {
      image: UsersIcon,
      text: 'Users',
      amount: totalUnfilterdUsers,
    },
    {
      image: ActiveIcon,
      text: 'Active Users',
      amount: activeUsers,
    },
    {
      image: LoansIcon,
      text: 'Users With Loans',
      amount: usersWithLoans,
    },
    {
      image: SavingsIcon,
      text: 'Users With savings',
      amount: 0,
    },
  ]

  if (userStatus === STATUS.LOADING) {
    return (
      <div className="spin-container">
        <Spinner />
      </div>
    )
  }

  return (
    <div className={styles.users}>
      <PageTitle title="Users" />
      <div className={styles.cards}>
        {cards.map((card) => (
          <Card
            key={card.text}
            image={card.image}
            text={card.text}
            amount={card.amount}
          />
        ))}
      </div>
      <Paper className={styles.paper}>
        <Table users={users} toggleFilterMenu={toggleFilterMenu} />
      </Paper>
      <FilterMenu isOpen={openMenu} toggleFilterMenu={toggleFilterMenu} />
      <Pagination
        currentPage={currentPage}
        totalUsers={totalUsers}
        numberPerPage={numberPerPage}
        changeCurrentPage={changeCurrentPage}
        changeNumberPerPage={changeNumberPerPage}
      />
    </div>
  )
}

Users.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../utils/messages/${locale}.json`)).default,
    },
  }
}

export default Users
