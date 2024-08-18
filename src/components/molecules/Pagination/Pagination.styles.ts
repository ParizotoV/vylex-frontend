import styled from 'styled-components'
import { ButtonPaginateProps } from './Pagination.types'

export const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'end',
  padding: '8px 16px',
  boxSizing: 'border-box'
}))

export const WrapperInfos = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  gap: '4px'
}))

export const ButtonPaginate = styled('div')<ButtonPaginateProps>(({ disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  color: typeof disabled === 'number' ? '' : 'rgba(0, 0, 0, 0.26)',
  '&:hover': {
    background: typeof disabled === 'number' ? 'rgba(0, 0, 0, 0.04)' : ''
  }
}))
