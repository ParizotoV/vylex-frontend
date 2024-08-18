import styled from 'styled-components'

export const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxWidth: '492px',
  width: '100%',
  padding: '0 50px',
  boxSizing: 'border-box'
}))

export const WrapperForm = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px'
}))
