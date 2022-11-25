import Image from 'next/image'
import Link from 'next/link'
import BackArrow from '../../public/images/back_arrow.svg'
import { urls } from '../../utils/constants/urls'
import styles from './PageTitle.module.scss'

type Props = {
  title: string
  buttonText?: string
}

export default function PageTitle({ title, buttonText }: Props) {
  return (
    <div className={styles.wrapper}>
      {buttonText && (
        <Link href={urls.USERS} className={styles.wrapper__button}>
          <Image src={BackArrow} alt={buttonText} />
          <span>{buttonText}</span>
        </Link>
      )}
      <h1>{title}</h1>
    </div>
  )
}
