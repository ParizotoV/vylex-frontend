import { Button } from '@/components/atoms/Button/Button'
import TextInput from '@/components/molecules/TextInput'
import { useAuthContext } from '@/context/AuthContex'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { Form, WrapperForm } from './FormFogotPassword.styles'
import { FormForgotPasswordSchema, FormForgotPasswordType } from './FormForgotPassword.schema'

const FormFogotPassword = () => {
  const { recoverPassword } = useAuthContext()

  const { control, handleSubmit } = useForm<FormForgotPasswordType>({
    resolver: yupResolver(FormForgotPasswordSchema)
  })

  const onSubmit = async (dataForm: FormForgotPasswordType) => {
    await recoverPassword(dataForm.email)
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
          RECUPERAR SENHA
        </Button>
      </WrapperForm>
    </Form>
  )
}

export default FormFogotPassword
