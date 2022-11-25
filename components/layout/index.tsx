import { ReactNode } from 'react'
import Sidebar from '../Sidebar'
import Topbar from '../Topbar'
import styles from './Layout.module.scss'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Topbar />
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </>
  )
}
