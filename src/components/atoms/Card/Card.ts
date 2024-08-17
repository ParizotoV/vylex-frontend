import styled from 'styled-components'
import { CardProps } from './Card.types'

export const Card = styled('div').withConfig({
  shouldForwardProp: (prop) => !['maxWidth'].includes(prop)
})<CardProps>(({ maxWidth }) => ({
  borderRadius: '8px',
  padding: '2rem 1.5rem',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,.12),0 2px 4px 0 rgba(0,0,0,.08)',
  width: '100%',
  maxWidth: maxWidth,
  boxSizing: 'border-box',
  height: 'auto'
}))
