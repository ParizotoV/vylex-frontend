import * as yup from 'yup'

export const FormForgotPasswordSchema = yup.object({
  email: yup.string().required('E-mail é obrigatório.')
})

export type FormForgotPasswordType = yup.InferType<typeof FormForgotPasswordSchema>
