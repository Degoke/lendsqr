import Image, { StaticImageData } from 'next/image'
import Paper from '../Paper'
import styles from './Card.module.scss'

type Props = {
  image: StaticImageData
  text: string
  amount: number
}

export default function Card({ image, text, amount }: Props) {
  return (
    <Paper>
      <div className={styles.card}>
        <Image src={image} alt="" />
        <p className={styles.card__text}>{text}</p>
        <p className={styles.card__number}>{amount}</p>
      </div>
    </Paper>
  )
}
