// import "@/styles/globals.css";
import { AuthProvider } from '@/context/AuthContext'
import '@/styles/global.css'
import theme from '@/theme'
import type { AppProps } from 'next/app'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-phone-input-2/lib/style.css'
import 'react-responsive-modal/styles.css'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}
