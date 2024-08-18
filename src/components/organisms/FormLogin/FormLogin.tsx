import { Button } from '@/components/atoms/Button/Button'
import { Loader } from '@/components/atoms/Loader/Loader'
import { Typograph } from '@/components/atoms/Typograph'
import TextInput from '@/components/molecules/TextInput'
import { useAuthContext } from '@/context/AuthContext'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FormLoginSchema, FormLoginType } from './FormLogin.schema'
import { Form, WrapperForm, WrapperTitle } from './FormLogin.styles'

const FormLogin = () => {
  const { signIn } = useAuthContext()

  const { control, handleSubmit } = useForm<FormLoginType>({
    resolver: yupResolver(FormLoginSchema)
  })

  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (dataForm: FormLoginType) => {
    setLoading(true)
    await signIn({ ...dataForm })
    setLoading(false)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <WrapperTitle>
        <Typograph bold size="XL">
          Seja bem vindo!
        </Typograph>
        <Typograph bold size="LG" color="#777877">
          Acesse o gerenciador de alunos
        </Typograph>
      </WrapperTitle>
      <WrapperForm>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <TextInput {...field} error={!!error?.message} helperText={error?.message} label="E-mail:" fullWidth />
          )}
        />
        <div>
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
          <Typograph size="SM" bold>
            <Link href="/recuperar-senha">Esqueceu sua senha?</Link>
          </Typograph>
        </div>

        <Button fullWidth>{loading ? <Loader /> : 'ENTRAR'}</Button>
      </WrapperForm>
    </Form>
  )
}

export default FormLogin
