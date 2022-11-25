import Image from 'next/image'
import FilterIcon from '../../public/images/filter_icon.svg'
import styles from './TableHeader.module.scss'
type Props = {
  text: string
  toggleFilterMenu: () => void
}

export default function TableHeader({ text, toggleFilterMenu }: Props) {
  return (
    <th className={styles.tableHeader}>
      <span>{text}</span>
      <Image
        src={FilterIcon}
        alt="filter"
        width={12}
        height={12}
        onClick={toggleFilterMenu}
      />
    </th>
  )
}
