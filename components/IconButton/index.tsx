import Image, { StaticImageData } from 'next/image'
import { HTMLAttributes } from 'react'
import styles from './IconButton.module.scss'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  image: StaticImageData
  alt: string
}

export default function IconButton({ image, alt, ...props }: Props) {
  return (
    <button className={styles.iconButton} {...props}>
      <Image src={image} alt={alt} />
    </button>
  )
}
