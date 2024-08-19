import RegisterPage from '@/components/pages/Register'
import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

const Register = () => {
  return <RegisterPage />
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

export default Register
