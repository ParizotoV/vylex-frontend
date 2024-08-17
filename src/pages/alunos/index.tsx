import StudentsPage from '@/components/pages/Students'
import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

const Students = () => {
  return <StudentsPage />
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { ['ischoll.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/login'
      }
    }
  }

  return {
    props: {}
  }
}

export default Students
