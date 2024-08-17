// import "@/styles/globals.css";
import { AuthProvider } from '@/context/AuthContex'
import '@/styles/global.css'
import theme from '@/theme'
import type { AppProps } from 'next/app'
import { Bounce, ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

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
