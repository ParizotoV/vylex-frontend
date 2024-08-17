import Navbar from '@/components/molecules/NavBar/NavBar'
import React from 'react'
import { LoggedTemplateProps } from './LoggedTemplate.types'
import { Container, WrapperChildren } from './LoggerTemplate.styles'

const LoggedTemplate: React.FC<LoggedTemplateProps> = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <WrapperChildren>{children}</WrapperChildren>
    </Container>
  )
}

export default LoggedTemplate
