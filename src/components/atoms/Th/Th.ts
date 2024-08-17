import styled from 'styled-components'

export const ThCell = styled('th')(() => ({
  color: 'rgb(163, 166, 162)',
  backgroundColor: 'rgb(249, 251, 252)',
  fontWeight: 600,
  padding: '8px 10px',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  fontSize: '0.875rem',
  lineHeight: ' 1.5rem',
  display: 'table-cell',
  verticalAlign: 'inherit',
  borderBottom: '1px solid rgb(224, 224, 224)',
  textAlign: 'left',
  position: 'sticky',
  top: '0px',
  zIndex: 2,
  cursor: 'pointer'
}))

export const ThBody = styled('th')(() => ({
  fontWeight: 400,
  fontSize: '0.875rem',
  lineHeight: 1.43,
  display: 'table-cell',
  verticalAlign: 'inherit',
  borderBottom: '1px solid rgb(224, 224, 224)',
  textAlign: 'left',
  padding: '16px',
  color: 'rgba(0, 0, 0, 0.87)',
  cursor: 'pointer'
}))
