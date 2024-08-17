import * as yup from 'yup'

export const FormRegisterSchema = yup.object({
  scholl: yup.string().required('Nome da escola obrigátorio.'),
  email: yup.string().email('Formato de e-mail inválido').required('Nome da escola obrigátorio.'),
  password: yup.string().required('Senha é obrigatória.'),
  confirmPassord: yup.string().oneOf([yup.ref('password'), undefined], 'As senhas devem corresponder')
})

export type FormRegisterSchemaType = yup.InferType<typeof FormRegisterSchema>
