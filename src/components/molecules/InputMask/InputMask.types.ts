import { InputMaskProps as InputMaskPropsAdditional } from '@/components/atoms/InputMask/InputMask.types'
import { InputMaskProps as InputMaskPropsDefault } from '@react-input/mask'

export type InputMaskProps = InputMaskPropsDefault &
  InputMaskPropsAdditional & {
    label?: string
    helperText?: string
  }
