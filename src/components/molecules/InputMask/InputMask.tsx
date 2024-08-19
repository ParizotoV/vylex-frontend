import { InputMaskStyled } from '@/components/atoms/InputMask'
import { Typograph } from '@/components/atoms/Typograph'
import theme from '@/theme'
import React from 'react'
import { Container } from './InputMask.styles'
import { InputMaskProps } from './InputMask.types'

const MaskInput: React.FC<InputMaskProps> = ({ helperText, label, ...rest }) => {
  return (
    <Container>
      {label && <Typograph>{label}</Typograph>}
      <InputMaskStyled id="InputMask" onChange={rest.onChange} value={rest.value} {...rest} />
      {helperText && <Typograph color={rest.error ? theme.PALLETE.ERROR[300] : undefined}>{helperText}</Typograph>}
    </Container>
  )
}

export default MaskInput
