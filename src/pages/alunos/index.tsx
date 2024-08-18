import StudentsPage from '@/components/pages/Students'
import { StudentProvider } from '@/context/StudentContext/StudentContext'
import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

const Students = () => {
  return (
    <StudentProvider>
      <StudentsPage />
    </StudentProvider>
  )
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
