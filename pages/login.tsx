import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import Logo from '../public/images/big_logo.svg'
import DisplayImage from '../public/images/login_image.svg'
import styles from '../styles/Login.module.scss'
import { urls } from '../utils/constants/urls'

export default function Login() {
  const router = useRouter()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    router.push(urls.USERS)
  }
  return (
    <div className={styles.login}>
      <div className={styles.login__main}>
        <div className={styles.login__main_right}>
          <Image src={Logo} alt="lendsqr" />
          <Image src={DisplayImage} alt="lendsqr" />
        </div>
        <div className={styles.login__main_left}>
          <h1>Welcome!</h1>
          <p>Enter details to login</p>
          <form className={styles.login__form} onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="password" />
            <span>FORGOT PASSWORD?</span>
            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  )
}
