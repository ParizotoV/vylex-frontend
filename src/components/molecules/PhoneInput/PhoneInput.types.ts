import { PhoneInputProps as PhoneInputPropsDefault } from 'react-phone-input-2'

export type PhoneInputProps = PhoneInputPropsDefault & {
  label?: string
  helperText?: string
  error?: boolean
  className?: string
}
