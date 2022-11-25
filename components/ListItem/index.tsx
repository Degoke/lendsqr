import Link from 'next/link'
import Image from 'next/image'
import { IListItem } from '../../utils/types/list'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import styles from './ListItem.module.scss'

type Props = {
  item: IListItem
}

export default function ListItem({ item }: Props) {
  const router = useRouter()
  const { pathname } = router

  return (
    <li>
      <Link
        href={item.url}
        className={`${styles.item} ${pathname == item.url && styles.current}`}
      >
        <Image src={item.icon} alt={`${item.text} nav button`} />
        <span>{item.text}</span>
      </Link>
    </li>
  )
}
