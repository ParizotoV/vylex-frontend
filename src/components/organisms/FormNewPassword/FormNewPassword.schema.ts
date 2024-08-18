import * as yup from 'yup'

export const FormNewPasswordSchema = yup.object({
  password: yup.string().required('Senha é obrigatória.'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'As senhas devem corresponder')
})

export type FormNewPasswordType = yup.InferType<typeof FormNewPasswordSchema>
