import LoginPage from '@/components/pages/Login/Login'
import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

const Login = () => {
  return <LoginPage />
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { ['ischoll.token']: token } = parseCookies(ctx)

  if (token) {
    return {
      redirect: {
        destination: '/alunos'
      }
    }
  }

  return {
    props: {}
  }
}

export default Login
