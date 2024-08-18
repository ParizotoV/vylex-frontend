import styled from 'styled-components'

export const Loader = styled('div')(() => ({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  boxShadow: '32px 0 #fff, -32px 0 #fff',
  position: 'relative',
  animation: 'flash 0.5s ease-out infinite alternate',

  '@keyframes flash': {
    '0%': {
      backgroundColor: '#FFF2',
      boxShadow: '32px 0 #FFF2, -32px 0 #FFF'
    },
    '50%': {
      backgroundColor: '#FFF',
      boxShadow: '32px 0 #FFF2, -32px 0 #FFF2'
    },
    '100%': {
      backgroundColor: '#FFF2',
      boxShadow: '32px 0 #FFF, -32px 0 #FFF2'
    }
  }
}))
