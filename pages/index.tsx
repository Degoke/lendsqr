import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Spinner from '../components/Spinner'
import { urls } from '../utils/constants/urls'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push(urls.LOGIN)
  }, [router])

  return (
    <div className="spin-container">
      <Spinner />
    </div>
  )
}
