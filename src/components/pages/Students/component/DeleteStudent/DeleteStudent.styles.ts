import styled from 'styled-components'

export const WrapperIcon = styled('div')(() => ({
  width: '68px',
  height: '68px',
  padding: '10px',
  background: 'rgb(248, 248, 248)',
  borderRadius: '12px',
  margin: '0px auto'
}))

export const WrapperInfos = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px'
}))

export const WrapperButtom = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
  marginTop: '20px'
}))
