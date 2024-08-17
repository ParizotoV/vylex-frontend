import styled from 'styled-components'
import { ButtonProps } from './Button.types'

export const Button = styled('button').withConfig({
  shouldForwardProp: (prop) => !['background', 'color', 'fullWidth'].includes(prop)
})<ButtonProps>(({ background = '#231F20', color = '#F7F7F7', fullWidth, theme }) => ({
  height: '42px',
  boxSizing: 'border-box',
  padding: '16px 8px',
  borderRadius: '8px',
  background,
  color,
  width: fullWidth ? '100%' : undefined,
  fontSize: theme.FONT_SIZE.MD,
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0
}))
