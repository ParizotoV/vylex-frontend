import React, { useState } from 'react'

import { Button } from '@/components/atoms/Button'
import { Loader } from '@/components/atoms/Loader'
import { Typograph } from '@/components/atoms/Typograph'
import TextInput from '@/components/molecules/TextInput'
import { useAuthContext } from '@/context/AuthContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { FormRegisterSchema, FormRegisterSchemaType } from './FormRegister.schema'
import { Form, WrapperForm, WrapperTitle } from './FormRegister.styles'

const FormRegister: React.FC = () => {
  const { signUp } = useAuthContext()

  const { control, handleSubmit } = useForm<FormRegisterSchemaType>({
    resolver: yupResolver(FormRegisterSchema)
  })

  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async ({ email, password, scholl }: FormRegisterSchemaType) => {
    setLoading(true)
    await signUp({ email, password, scholl })
    setLoading(false)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <WrapperTitle>
        <Typograph bold size="XL">
          Vamos começar!
        </Typograph>
        <Typograph bold size="LG" color="#777877">
          Crie sua conta grátis!
        </Typograph>
      </WrapperTitle>
      <WrapperForm>
        <Controller
          control={control}
          name="scholl"
          render={({ field, fieldState: { error } }) => (
            <TextInput {...field} error={!!error?.message} helperText={error?.message} label="Escola:" fullWidth />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <TextInput {...field} error={!!error?.message} helperText={error?.message} label="E-mail:" fullWidth />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              error={!!error?.message}
              helperText={error?.message}
              label="Senha:"
              fullWidth
              type="password"
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassord"
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              error={!!error?.message}
              helperText={error?.message}
              label="Repetir senha:"
              fullWidth
              type="password"
            />
          )}
        />
        <Button type="submit" fullWidth>
          {loading ? <Loader /> : 'ENTRAR'}
        </Button>
      </WrapperForm>
    </Form>
  )
}

export default FormRegister
