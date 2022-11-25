import Popover from '../Popover'
import styles from './FilterMenu.module.scss'

type Props = {
  isOpen: boolean
}

export default function FilterMenu({ isOpen }: Props) {
  return (
    <Popover isOpen={isOpen} className={styles.popover}>
      <form className={styles.form} name="filterForm">
        <select>
          <option>select</option>
        </select>
        <input type="" />
        <input type="" />
        <input type="" />
        <input type="" />
        <select>
          <option>select</option>
        </select>
        <div>
          <button>Reset</button>
          <button type="submit">Filter</button>
        </div>
      </form>
    </Popover>
  )
}
