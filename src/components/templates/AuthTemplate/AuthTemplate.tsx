import { Typograph } from '@/components/atoms/Typograph'
import React from 'react'
import { Container, Photo, WrapperForm, WrapperPhoto } from './AuteTemplate.styles'
import { AuthTemplateProps } from './AuthTemplate.types'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  const { asPath } = useRouter()
  return (
    <Container>
      <WrapperForm>
        <Image src="/img/logo.svg" width={150} height={60} alt="logo" />
        {children}
        {asPath.includes('/login') ? (
          <Typograph size="MD">
            Não tem uma conta? <Link href="/registrar">Cadastre-se</Link>
          </Typograph>
        ) : (
          <Typograph size="MD">
            Já tem uma conta? <Link href="/login">Fazer login</Link>
          </Typograph>
        )}
      </WrapperForm>
      <WrapperPhoto>
        <Photo />
      </WrapperPhoto>
    </Container>
  )
}

export default AuthTemplate
