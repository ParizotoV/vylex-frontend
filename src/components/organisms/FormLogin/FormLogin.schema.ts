import * as yup from 'yup'

export const FormLoginSchema = yup.object({
  email: yup.string().required('E-mail é obrigatório.'),
  password: yup.string().required('Senha é obrigatório.')
})

export type FormLoginType = yup.InferType<typeof FormLoginSchema>
