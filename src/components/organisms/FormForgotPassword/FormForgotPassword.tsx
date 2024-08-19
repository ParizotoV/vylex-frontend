import { Button } from '@/components/atoms/Button'
import { Loader } from '@/components/atoms/Loader'
import TextInput from '@/components/molecules/TextInput'
import { useAuthContext } from '@/context/AuthContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Form, WrapperForm } from './FormFogotPassword.styles'
import { FormForgotPasswordSchema, FormForgotPasswordType } from './FormForgotPassword.schema'

const FormFogotPassword = () => {
  const { recoverPassword } = useAuthContext()
  const [loading, setLoading] = useState<boolean>(false)

  const { control, handleSubmit } = useForm<FormForgotPasswordType>({
    resolver: yupResolver(FormForgotPasswordSchema)
  })

  const onSubmit = async (dataForm: FormForgotPasswordType) => {
    setLoading(true)
    await recoverPassword(dataForm.email)
    setLoading(false)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <WrapperForm>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <TextInput {...field} error={!!error?.message} helperText={error?.message} label="E-mail:" fullWidth />
          )}
        />
        <Button type="submit" fullWidth>
          {loading ? <Loader /> : 'RECUPERAR SENHA'}
        </Button>
      </WrapperForm>
    </Form>
  )
}

export default FormFogotPassword
