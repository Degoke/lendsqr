import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { selectCurrentStatusMenu } from '../../features/helpers/helperSlice'
import { useAppSelector } from '../../utils/hooks/useRedux'
import Popover from '../Popover'
import styles from './StatusMenu.module.scss'

export type StatusMenuItem = {
  image: StaticImageData
  text: string
  isLink: boolean
  onClick?: () => void
}

type Props = {
  items: StatusMenuItem[]
  id: string
}

export default function StatusMenu({ items, id }: Props) {
  const currentStatusMenu = useAppSelector(selectCurrentStatusMenu)
  return (
    <Popover isOpen={currentStatusMenu === id} className={styles.popover}>
      <ul className={styles.popover__menu}>
        {items?.map((item) => {
          if (item.isLink) {
            return (
              <li key={item.text} className={styles.popover__menu_item}>
                <Link
                  href={`/users/${id}`}
                  className={styles.popover__menu_button}
                >
                  <Image src={item.image} alt={item.text} />
                  {item.text}{' '}
                </Link>
              </li>
            )
          } else {
            return (
              <li key={item.text} className={styles.popover__menu_item}>
                <button
                  className={styles.popover__menu_button}
                  onClick={item.onClick}
                >
                  <Image src={item.image} alt={item.text} />
                  {item.text}
                </button>
              </li>
            )
          }
        })}
      </ul>
    </Popover>
  )
}
