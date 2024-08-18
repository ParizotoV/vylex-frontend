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
