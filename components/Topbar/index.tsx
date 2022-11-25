import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/logo.svg'
import SearchIcon from '../../public/images/search_icon.svg'
import DropdownIcon from '../../public/images/dropdown_icon.svg'
import DummyImage from '../../public/images/dummy_image.svg'
import NotificationIcon from '../../public/images/notification_icon.svg'
import IconButton from '../IconButton'
import styles from './Topbar.module.scss'

export default function Topbar() {
  return (
    <nav className={styles.topbar}>
      <div className={styles.topbar__logoSection}>
        <div>
          <Image src={Logo} alt="lendsqr logo" />
        </div>
        <form>
          <input type="search" placeholder="Search for something" />
          <button type="submit">
            <Image src={SearchIcon} alt="search button" />
          </button>
        </form>
      </div>
      <div className={styles.topbar__actionButtons}>
        <p>Docs</p>
        <IconButton image={NotificationIcon} alt="Notifications Button" />
        <Image
          className={styles.dummyImage}
          src={DummyImage}
          alt="user avatar"
        />
        <div className={styles.topbar__actionButtons_dropdown}>
          <span>Adedeji</span>
          <IconButton image={DropdownIcon} alt="user dropdown button" />
        </div>
      </div>
    </nav>
  )
}
