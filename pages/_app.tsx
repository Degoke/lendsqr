import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { Provider } from 'react-redux'
import store from '../store'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <Provider store={store}>
      <NextIntlProvider messages={pageProps.messages}>
        {getLayout(<Component {...pageProps} />)}
      </NextIntlProvider>
    </Provider>
  )
}
