import { Typograph } from '@/components/atoms/Typograph'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container } from './ButtonLogout.styles'

const ButtonLogout: React.FC = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
      <Typograph size="MD">Sair</Typograph>
    </Container>
  )
}

export default ButtonLogout
