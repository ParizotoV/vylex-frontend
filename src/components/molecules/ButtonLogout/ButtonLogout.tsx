import { Typograph } from '@/components/atoms/Typograph'
import { destroySession } from '@/utils/DestroySession'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React from 'react'
import { Container } from './ButtonLogout.styles'

const ButtonLogout: React.FC = () => {
  const { push } = useRouter()

  const handleLogout = () => {
    destroySession()
    push('/login')
  }

  return (
    <Container onClick={handleLogout}>
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
      <Typograph size="MD">Sair</Typograph>
    </Container>
  )
}

export default ButtonLogout
