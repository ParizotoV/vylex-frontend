import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styled from 'styled-components'
import { PropsActive } from './NavBar.types'

const NavbarWrapper = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.PALLETE.NEUTRAL[800],
  padding: '1rem 2rem',
  gap: '100px',
  position: 'relative',
  boxShadow: 'rgb(227, 230, 227) 0px 1px 0px',
  height: '100%',
  width: '260px',
  boxSizing: 'border-box',
  '@media (max-width: 704px)': {
    gap: 0,
    height: 'auto',
    width: '100%',
    flexDirection: 'column',
    padding: '1rem',
    justifyContent: 'center',
    alignItems: 'baseline'
  }
}))

const NavLinkWrapper = styled('div').withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop)
})<PropsActive>(({ active }) => ({
  display: 'flex',
  gap: '20px',
  flexDirection: 'column',
  margin: '0',
  '@media (max-width: 704px)': {
    display: active === 1 ? 'flex' : 'none',
    textAlign: 'center',
    padding: '0.625rem 0',
    width: '80%',
    margin: '0 auto',
    marginTop: '35px'
  }
}))

const StyledNavLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop)
})<PropsActive>(({ theme, active }) => ({
  textDecoration: 'none',
  transition: '0.2s',
  color: active === 1 ? theme.PALLETE.NEUTRAL[100] : theme.PALLETE.NEUTRAL[400],
  fontSize: theme.FONT_SIZE.MD,
  fontWeight: active === 1 ? 600 : 400,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'inherit',
  gap: '12px',
  '@media (max-width: 704px)': {
    width: '90%'
  }
}))

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  right: '20px',
  top: '30px',
  color: theme.PALLETE.NEUTRAL[100],
  fontSize: '1.8rem',
  cursor: 'pointer',
  '@media (max-width: 704px)': {
    display: 'block'
  }
}))

export const IconMenu = styled(FontAwesomeIcon).withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop)
})<PropsActive>(({ theme, active }) => ({
  color: active === 1 ? theme.PALLETE.PRIMARY[700] : theme.PALLETE.NEUTRAL[400]
}))

export { NavbarWrapper, NavLinkWrapper, StyledFontAwesomeIcon, StyledNavLink }

