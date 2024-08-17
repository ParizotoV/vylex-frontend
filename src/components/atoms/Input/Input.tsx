import styled from 'styled-components'
import { InputProps } from './Input.types'

export const Input = styled('input').withConfig({
  shouldForwardProp: (prop) => !['error', 'disabled', 'fullWidth'].includes(prop)
})<InputProps>(({ theme, error, disabled, fullWidth }) => ({
  borderRadius: '4px',
  background: theme.PALLETE.NEUTRAL[1000],
  border: `1px solid ${disabled ? theme.PALLETE.NEUTRAL[500] : error ? theme.PALLETE.ERROR[300] : 'rgba(0, 0, 0, 0.23)'}`,
  color: disabled ? theme.PALLETE.NEUTRAL[500] : theme.PALLETE.NEUTRAL[100],
  padding: '10px 14px',
  boxSizing: 'border-box',
  height: '42px',
  width: fullWidth ? '100%' : undefined,
  fontSize: theme.FONT_SIZE.MD,
  ['&:focus']: {
    outline: '1',
    outlineColor: error ? theme.PALLETE.ERROR[300] : undefined
  }
}))
