import { InputProps } from '@/components/atoms/Input/Input.types'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export type NumberInputProps = InputProps &
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'> & {
    label?: string
    helperText?: string
  }
