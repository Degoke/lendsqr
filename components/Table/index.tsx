import { IUser } from '../../utils/types/user'
import FilterMenu from '../FilterMenu'
import TableHeader from '../TableHeader'
import TableRow from '../TableRow'
import styles from './Table.module.scss'

type Props = {
  users: IUser[]
}

export default function Table({ users }: Props) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <TableHeader text="organization" />
            <TableHeader text="username" />
            <TableHeader text="email" />
            <TableHeader text="phonenumber" />
            <TableHeader text="date joined" />
            <TableHeader text="status" />
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <TableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <FilterMenu isOpen={false} />
    </div>
  )
}
