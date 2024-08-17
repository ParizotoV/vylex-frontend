import FormAuth from '@/components/organisms/FormLogin/FormLogin'
import AuthTemplate from '@/components/templates/AuthTemplate/AuthTemplate'
import React from 'react'

const LoginPage: React.FC = () => {
  return (
    <AuthTemplate>
      <FormAuth />
    </AuthTemplate>
  )
}

export default LoginPage
