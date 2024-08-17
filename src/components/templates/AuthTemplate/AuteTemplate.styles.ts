import styled from 'styled-components'

export const Container = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 680px',
  placeContent: 'center',
  gridTemplateRows: '100vh',
  height: '100%',
  maxHeight: '100vh',
  overflow: 'hidden',
  width: '100%',
  '@media (max-width: 1064px)': {
    gridTemplateColumns: '1fr'
  },
  '@media (min-width: 1800px)': {
    width: '80%',
    margin: '0 auto'
  }
}))

export const WrapperForm = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '35px 0',
  boxSizing: 'border-box'
}))

export const Photo = styled('div')(() => ({
  position: 'relative',
  borderRadius: '8px',
  background: 'url(img/background3.jpeg) no-repeat center',
  backgroundSize: 'cover',
  height: '90%',
  width: '90%',
  boxShadow: 'rgba(15,67,35, 0.4) 0px 4px 12px'
}))

export const WrapperPhoto = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))
