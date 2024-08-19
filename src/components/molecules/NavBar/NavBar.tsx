import {
  IconMenu,
  NavbarWrapper,
  NavLinkWrapper,
  StyledFontAwesomeIcon,
  StyledNavLink
} from '@/components/atoms/NavBar'
import ButtonLogout from '@/components/molecules/ButtonLogout'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Navbar = () => {
  const { asPath } = useRouter()

  const [active, setActive] = useState(false)
  const link = [
    {
      page: 'Alunos',
      href: '/alunos',
      icon: faUser
    }
  ]

  const activeTab = (href: string) => {
    return asPath.includes(href)
  }

  return (
    <NavbarWrapper>
      <Image src="/img/logo.svg" alt="logo" width={130} height={60} />
      <StyledFontAwesomeIcon icon={faBars} onClick={() => setActive(!active)} />
      <NavLinkWrapper active={active ? 1 : 0}>
        {link.map((link) => (
          <StyledNavLink key={link.page} href={link.href} active={activeTab(link.href) ? 1 : 0}>
            <IconMenu icon={faUser} active={activeTab(link.href) ? 1 : 0} />
            {link.page}
          </StyledNavLink>
        ))}
        <ButtonLogout />
      </NavLinkWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
