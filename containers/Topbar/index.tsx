import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/logo.svg'
import SearchIcon from '../../public/images/search_icon.svg'
import DropdownIcon from '../../public/images/dropdown_icon.svg'
import DummyImage from '../../public/images/dummy_image.svg'
import NotificationIcon from '../../public/images/notification_icon.svg'
import IconButton from '../../components/IconButton'
import styles from './Topbar.module.scss'


export default function Topbar() {
    return (
        <nav className={styles.topbar}>
            <div className={styles.topbar__logoSection}>
            <div>
                <Image src={Logo} alt="lendsqr logo" />
            </div>
            <form>
                <input type="search" />
                <button type="submit">
                    <Image src={SearchIcon} alt="search button" />
                </button>
            </form>
            </div>
            <div className={styles.topbar__actionButtons}>
                <Link href="/">
                    Docs
                </Link>
                <IconButton image={NotificationIcon} alt="Notifications Button" />
                <div>
                    <Image src={DummyImage} alt="user avatar" />
                </div>
                <div>
                    <span>Adedeji</span>
                    <IconButton image={DropdownIcon} alt="user dropdown button" />
                </div>
            </div>
        </nav>
    )
}