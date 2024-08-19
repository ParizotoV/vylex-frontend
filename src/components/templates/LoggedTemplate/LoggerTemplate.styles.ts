import styled from 'styled-components'

export const Container = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',

  '@media (max-width: 704px)': {
    flexDirection: 'column'
  }
}))

export const WrapperChildren = styled('div')(() => ({
  width: '100%',
  height: '100%',
  padding: '20px',
  boxSizing: 'border-box',
  overflow: 'auto'
}))
