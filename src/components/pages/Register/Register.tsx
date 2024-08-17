import FormRegister from '@/components/organisms/FormRegister'
import AuthTemplate from '@/components/templates/AuthTemplate/AuthTemplate'
import React from 'react'

const RegisterPage: React.FC = () => {
  return (
    <AuthTemplate>
      <FormRegister />
    </AuthTemplate>
  )
}

export default RegisterPage
