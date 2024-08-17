// import "@/styles/globals.css";
import { AuthProvider } from '@/context/AuthContex'
import '@/styles/global.css'
import theme from '@/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}
