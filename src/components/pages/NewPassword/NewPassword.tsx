import FormNewPassword from '@/components/organisms/FormNewPassword/FormNewPassword'
import AuthTemplate from '@/components/templates/AuthTemplate'
import React from 'react'

const NewPasswordPage: React.FC = () => {
  return (
    <AuthTemplate>
      <FormNewPassword />
    </AuthTemplate>
  )
}

export default NewPasswordPage
