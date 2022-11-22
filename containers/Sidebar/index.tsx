import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './Sidebar.module.scss'
import Briefcase from '../../public/images/briefcase.svg'
import NextIcon from '../../public/images/next_icon.svg'
import List from '../../components/List'
import { sidebarData } from '../../utils/data/sidebar'

export default function Sidebar() {
    const t = useTranslations("Sidebar")
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar__item}>
                <Image src={Briefcase} alt="" />
                <span>{t("switch_organization")}</span>
                <Image src={NextIcon} alt="" />
            </div>
            <div className={styles.sidebar__item}>
                <Image src={Briefcase} alt="" />
                <span>{t("dashboard")}</span>
            </div>
            {sidebarData.map((data) => (
                <List title={t(data.title)} key={data.title} items={data.items} />
            ))}
        </aside>
    )
}