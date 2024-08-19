import styled from 'styled-components'

export const WrapperFilter = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'end',
  marginBottom: '16px',
  marginTop: '16px',
  gap: '8px',
  '@media (max-width: 368px)': {
    flexDirection: 'column'
  }
}))

export const Actions = styled('div')(() => ({
  display: 'flex'
}))

export const ButtonAction = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  '&:hover': {
    background: 'rgba(0, 0, 0, 0.16)'
  }
}))
