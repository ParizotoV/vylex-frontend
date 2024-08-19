import { validateOrFail as validateOrFailCpf } from 'validation-br/dist/cpf'
import * as yup from 'yup'

export const FormStudentSchema = yup.object({
  name: yup.string().required('Nome é obrigátorio.'),
  email: yup.string().email('Formato de e-mail inválido').required('Nome da escola obrigátorio.'),
  dateBirth: yup.string().required('Data de aniversário é obrigatória.'),
  registrationNumber: yup.string().required('N° da matricula é obrigatória.'),
  document: yup
    .string()
    .required('Documento é obrigatório.')
    .test('document', 'Documento', function (value?: string) {
      const { path, createError } = this
      if (!value) return true

      try {
        value = value.replace(/\D/g, '')
        if (value.length === 11) {
          validateOrFailCpf(value)
        }
        return true
      } catch (error) {
        return createError({
          message: 'CPF inválido',
          path
        })
      }
    }),
  address: yup.string().required('Endereço é obrigatório.'),
  cep: yup.string().required('CEP é obrigatório.'),
  neighborhood: yup.string().required('Bairro é obrigatório.'),
  city: yup.string().required('Cidade é obrigatório.'),
  complement: yup.string(),
  phone: yup.string().required('Telefone é obrigatório.'),
  active: yup.string().required('Status é obrigatório.')
})

export type FormStudentSchemaType = yup.InferType<typeof FormStudentSchema>
