import FormFogotPassword from '@/components/organisms/FormForgotPassword/FormForgotPassword'
import AuthTemplate from '@/components/templates/AuthTemplate'
import React from 'react'

const RecoverPasswordPage: React.FC = () => {
  return (
    <AuthTemplate>
      <FormFogotPassword />
    </AuthTemplate>
  )
}

export default RecoverPasswordPage
