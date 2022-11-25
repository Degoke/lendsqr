import { useState } from 'react'
import { IUser } from '../../utils/types/user'
import FilterMenu from '../FilterMenu'
import TableHeader from '../TableHeader'
import TableRow from '../TableRow'
import styles from './Table.module.scss'

type Props = {
  users: IUser[]
  toggleFilterMenu: () => void
}

export default function Table({ users, toggleFilterMenu }: Props) {
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
              <tr className={styles.table__text}>
                <td>No users available</td>
                <td>
                  <button onClick={toggleFilterMenu}>Reset Filters</button>
                </td>
              </tr>
            ))}
          {users !== null &&
            users?.map((user) => <TableRow key={user.id} user={user} />)}
        </tbody>
      </table>
    </div>
  )
}
