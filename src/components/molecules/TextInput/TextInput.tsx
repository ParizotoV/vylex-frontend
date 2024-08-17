import { Input } from '@/components/atoms/Input'
import { Typograph } from '@/components/atoms/Typograph'
import theme from '@/theme'
import React from 'react'
import { Container } from './TextInput.styles'
import { TextInputProps } from './TextInput.types'

const TextInput: React.FC<TextInputProps> = ({ helperText, label, ...rest }) => {
  return (
    <Container>
      {label && <Typograph>{label}</Typograph>}
      <Input onChange={rest.onChange} value={rest.value} {...rest} />
      {helperText && <Typograph color={rest.error ? theme.PALLETE.ERROR[300] : undefined}>{helperText}</Typograph>}
    </Container>
  )
}

export default TextInput
