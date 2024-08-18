import { Button } from '@/components/atoms/Button/Button'
import TextInput from '@/components/molecules/TextInput'
import { useAuthContext } from '@/context/AuthContex'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import { FormNewPasswordSchema, FormNewPasswordType } from './FormNewPassword.schema'
import { Form, WrapperForm } from './FormNewPassword.styles'

const FormNewPassword = () => {
  const { newPassword } = useAuthContext()

  const { query } = useRouter()

  const { control, handleSubmit } = useForm<FormNewPasswordType>({
    resolver: yupResolver(FormNewPasswordSchema)
  })

  const onSubmit = async (dataForm: FormNewPasswordType) => {
    await newPassword(dataForm.password, query?.token as string, query?.userId as string)
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
          RECUPERAR
        </Button>
      </WrapperForm>
    </Form>
  )
}

export default FormNewPassword
