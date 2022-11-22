import Image, { StaticImageData } from 'next/image'
import styles from './iconButton.module.scss'

type Props = {
    image: StaticImageData
    alt: string
}

export default function IconButton({ image, alt }: Props) {
    return (
        <button className={styles.iconButton}>
            <Image src={image} alt={alt} />
        </button>
    )
}