import React from 'react'

import { Button } from '@/components/atoms/Button/Button'
import { Typograph } from '@/components/atoms/Typograph'
import TextInput from '@/components/molecules/TextInput'
import { Form, WrapperForm, WrapperTitle } from './FormLogin.styles'

const FormAuth: React.FC = () => {
  return (
    <Form>
      <WrapperTitle>
        <Typograph bold size="XL">
          Seja bem vindo!
        </Typograph>
        <Typograph bold size="LG" color="#777877">
          Acesse o gerenciador de alunos
        </Typograph>
      </WrapperTitle>
      <WrapperForm>
        <TextInput label="E-mail:" fullWidth />
        <TextInput label="Senha:" fullWidth type="password" />
        <Button fullWidth>ENTRAR</Button>
      </WrapperForm>
    </Form>
  )
}

export default FormAuth
