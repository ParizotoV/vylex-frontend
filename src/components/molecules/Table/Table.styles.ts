import styled from 'styled-components'

export const ContainerSkeleton = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  width: '100%'
}))

export const Container = styled('div')(() => ({
  maxWidth: '100%',
  overflow: 'auto'
}))
