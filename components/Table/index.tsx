import { useState } from 'react'
import { IUser } from '../../utils/types/user'
import FilterMenu from '../FilterMenu'
import TableHeader from '../TableHeader'
import TableRow from '../TableRow'
import styles from './Table.module.scss'

type Props = {
  users: IUser[]
  openMenu: boolean
  toggleFilterMenu: () => void
}

export default function Table({ users, openMenu, toggleFilterMenu }: Props) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <TableHeader
              text="organization"
              toggleFilterMenu={toggleFilterMenu}
            />
            <TableHeader text="username" toggleFilterMenu={toggleFilterMenu} />
            <TableHeader text="email" toggleFilterMenu={toggleFilterMenu} />
            <TableHeader
              text="phonenumber"
              toggleFilterMenu={toggleFilterMenu}
            />
            <TableHeader
              text="date joined"
              toggleFilterMenu={toggleFilterMenu}
            />
            <TableHeader text="status" toggleFilterMenu={toggleFilterMenu} />
            <th></th>
          </tr>
        </thead>

        <tbody>
          {!users ||
            (users.length === 0 && (
              <p className={styles.table__text}>
                no available users{' '}
                <button onClick={toggleFilterMenu}>Reset Filters</button> to
                view users
              </p>
            ))}
          {users &&
            users?.map((user) => <TableRow key={user.id} user={user} />)}
        </tbody>
      </table>
    </div>
  )
}
