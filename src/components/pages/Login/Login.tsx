import FormLogin from '@/components/organisms/FormLogin/FormLogin'
import AuthTemplate from '@/components/templates/AuthTemplate/AuthTemplate'
import React from 'react'

const LoginPage: React.FC = () => {
  return (
    <AuthTemplate>
      <FormLogin />
    </AuthTemplate>
  )
}

export default LoginPage
