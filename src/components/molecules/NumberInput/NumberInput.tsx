import { Input } from '@/components/atoms/Input'
import { Typograph } from '@/components/atoms/Typograph'
import theme from '@/theme'
import { onlyNumber } from '@/utils'
import React from 'react'
import { Container } from './NumberInput.styles'
import { NumberInputProps } from './NumberInput.types'

const NumberInput: React.FC<NumberInputProps> = ({ helperText, label, ...rest }) => {
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = onlyNumber(event.target.value)
    event.target.value = value
    rest.onChange && rest.onChange(event)
  }

  return (
    <Container>
      {label && <Typograph>{label}</Typograph>}
      <Input {...rest} onChange={(event) => handleChangeInput(event)} />
      {helperText && <Typograph color={rest.error ? theme.PALLETE.ERROR[300] : undefined}>{helperText}</Typograph>}
    </Container>
  )
}

export default NumberInput
