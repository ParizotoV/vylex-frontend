import styled from 'styled-components'
import { TrProps } from './Tr.types'

export const Tr = styled('tr')<TrProps>(({ theme, cell = 0 }) => ({
  color: 'inherit',
  display: 'table-row',
  verticalAlign: 'middle',
  outline: '0px',
  '&:hover': {
    background: cell === 1 ? theme.PALLETE.NEUTRAL[800] : 'none'
  }
}))
