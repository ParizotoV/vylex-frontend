import { Button } from '@/components/atoms/Button/Button'
import { Loader } from '@/components/atoms/Loader/Loader'
import TextInput from '@/components/molecules/TextInput'
import { useAuthContext } from '@/context/AuthContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FormNewPasswordSchema, FormNewPasswordType } from './FormNewPassword.schema'
import { Form, WrapperForm } from './FormNewPassword.styles'

const FormNewPassword = () => {
  const { newPassword } = useAuthContext()
  const { query } = useRouter()

  const { control, handleSubmit } = useForm<FormNewPasswordType>({
    resolver: yupResolver(FormNewPasswordSchema)
  })

  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (dataForm: FormNewPasswordType) => {
    setLoading(true)
    await newPassword(dataForm.password, query?.token as string, query?.userId as string)
    setLoading(false)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <WrapperForm>
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              type="password"
              error={!!error?.message}
              helperText={error?.message}
              label="Senha:"
              fullWidth
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              type="password"
              error={!!error?.message}
              helperText={error?.message}
              label="Confirme a senha:"
              fullWidth
            />
          )}
        />
        <Button type="submit" fullWidth>
          {loading ? <Loader /> :'RECUPERAR' }
        </Button>
      </WrapperForm>
    </Form>
  )
}

export default FormNewPassword
