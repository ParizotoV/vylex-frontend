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

export const WrapperTitle = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBottom: '46px'
}))

export const WrapperForm = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
}))
