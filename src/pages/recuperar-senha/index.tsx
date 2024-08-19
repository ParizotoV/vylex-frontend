import NewPasswordPage from '@/components/pages/NewPassword'
import RecoverPasswordPage from '@/components/pages/RecoverPassword'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'

const RecoverPassword = () => {
  const { query } = useRouter()

  if (query?.token && query.userId) {
    return <NewPasswordPage />
  }

  return <RecoverPasswordPage />
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

export default RecoverPassword
