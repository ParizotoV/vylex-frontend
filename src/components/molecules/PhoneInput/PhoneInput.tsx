import { Typograph } from '@/components/atoms/Typograph'
import theme from '@/theme'
import React from 'react'
import { default as PhoneInputt } from 'react-phone-input-2'
import { Container } from './PhoneInput.styles'
import { PhoneInputProps } from './PhoneInput.types'

const PhoneInput: React.FC<PhoneInputProps> = ({ label, error, helperText, className, ...rest }) => {
  return (
    <Container className={className}>
      {label && <Typograph>{label}</Typograph>}
      <PhoneInputt
        {...rest}
        enableSearch
        enableTerritories
        inputStyle={{
          height: '42px',
          width: '100%',
          fontFamily: "'Inter', Roboto, sans-serif",
          color: !rest?.disabled ? 'rgba(0, 0, 0, 0.87)' : 'rgba(0, 0, 0, 0.38)',
          fontSize: '15px',
          lineHeight: '1.4375em'
        }}
      />
      {helperText && <Typograph color={error ? theme.PALLETE.ERROR[300] : undefined}>{helperText}</Typograph>}
    </Container>
  )
}

export default PhoneInput
