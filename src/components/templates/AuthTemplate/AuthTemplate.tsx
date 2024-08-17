import { Typograph } from '@/components/atoms/Typograph'
import React from 'react'
import { Container, Photo, WrapperForm, WrapperPhoto } from './AuteTemplate.styles'
import { AuthTemplateProps } from './AuthTemplate.types'

import Image from 'next/image'

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <Container>
      <WrapperForm>
        <Image src="/img/logo.svg" width={150} height={60} alt="logo" />
        {children}
        <Typograph size="SM">© 2024 Vinicius Vieira Parizoto. Todos os direitos reservados.</Typograph>
      </WrapperForm>
      <WrapperPhoto>
        <Photo />
      </WrapperPhoto>
    </Container>
  )
}

export default AuthTemplate
