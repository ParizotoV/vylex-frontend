import styled from 'styled-components'

export const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
}))

export const WrapperForm = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '12px',
  '@media (max-width: 550px)': {
    gridTemplateColumns: '1fr'
  }
}))

export const Flex = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
}))
