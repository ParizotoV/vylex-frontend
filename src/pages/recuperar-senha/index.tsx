import NewPasswordPage from '@/components/pages/NewPassword/NewPassword'
import RecoverPasswordPage from '@/components/pages/RecoverPassword/RecoverPassword'
import { useRouter } from 'next/router'

const RecoverPassword = () => {
  const { query } = useRouter()

  if (query?.token && query.userId) {
    return <NewPasswordPage />
  }

  return <RecoverPasswordPage />
}

export default RecoverPassword
