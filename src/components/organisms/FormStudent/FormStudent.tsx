import { Button } from '@/components/atoms/Button'
import { SelectInput } from '@/components/atoms/Select/Select'
import { Typograph } from '@/components/atoms/Typograph'
import InputMask from '@/components/molecules/InputMask'
import NumberInput from '@/components/molecules/NumberInput/NumberInput'
import PhoneInput from '@/components/molecules/PhoneInput/PhoneInput'
import TextInput from '@/components/molecules/TextInput'
import { useStudentContext } from '@/context/StudentContext/StudentContext'
import { StudentService } from '@/services/StudentService'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Modal from 'react-responsive-modal'
import { toast } from 'react-toastify'
import { FormStudentSchema, FormStudentSchemaType } from './FormStudent.schema'
import { Flex, Form, WrapperForm } from './FormStudent.styles'

const FormStudent: React.FC = () => {
  const { updateModal, modal, updateTable } = useStudentContext()
  const { control, handleSubmit, reset } = useForm<FormStudentSchemaType>({
    defaultValues: {
      active: 'active'
    },
    resolver: yupResolver(FormStudentSchema)
  })

  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (dataForm: FormStudentSchemaType) => {
    try {
      setLoading(true)
      await StudentService.createStudent(dataForm)
      updateTable((prevState) => !prevState)
      handleCloseModal()
      toast.success('Estudante criado com sucesso.')
    } catch (err) {
      toast.error('Erro ao criar estudante.')
    } finally {
      setLoading(false)
    }
  }

  const handleCloseModal = () => {
    reset()
    updateModal({
      editing: false,
      open: false,
      id: ''
    })
  }

  return (
    <Modal open={modal.open} onClose={handleCloseModal} center>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Typograph size="LG" bold>
          {modal.editing ? 'Editar' : 'Cadastrar'} aluno
        </Typograph>
        <WrapperForm>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <TextInput {...field} error={!!error?.message} helperText={error?.message} label="Nome:" fullWidth />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <TextInput {...field} error={!!error?.message} helperText={error?.message} label="Email:" fullWidth />
            )}
          />
          <Controller
            control={control}
            name="dateBirth"
            render={({ field, fieldState: { error } }) => (
              <InputMask
                {...field}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                error={!!error?.message}
                helperText={error?.message}
                label="Data de aniversário:"
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name="registrationNumber"
            render={({ field, fieldState: { error } }) => (
              <NumberInput
                {...field}
                error={!!error?.message}
                helperText={error?.message}
                label="N° da matricula:"
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field, fieldState: { error } }) => (
              <PhoneInput {...field} error={!!error?.message} helperText={error?.message} label="Telefone:" />
            )}
          />
          <Controller
            control={control}
            name="document"
            render={({ field, fieldState: { error } }) => (
              <TextInput
                {...field}
                onChange={(event) => {
                  if (event.target.value.length <= 11) field.onChange(event.target.value)
                }}
                error={!!error?.message}
                helperText={error?.message}
                label="Documento:"
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name="cep"
            render={({ field, fieldState: { error } }) => (
              <TextInput {...field} error={!!error?.message} helperText={error?.message} label="CEP:" fullWidth />
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field, fieldState: { error } }) => (
              <TextInput {...field} error={!!error?.message} helperText={error?.message} label="Endereço:" fullWidth />
            )}
          />
          <Controller
            control={control}
            name="complement"
            render={({ field, fieldState: { error } }) => (
              <TextInput
                {...field}
                error={!!error?.message}
                helperText={error?.message}
                label="Complemento:"
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name="city"
            render={({ field, fieldState: { error } }) => (
              <TextInput {...field} error={!!error?.message} helperText={error?.message} label="Cidade:" fullWidth />
            )}
          />
          <Controller
            control={control}
            name="neighborhood"
            render={({ field, fieldState: { error } }) => (
              <TextInput {...field} error={!!error?.message} helperText={error?.message} label="Bairro:" fullWidth />
            )}
          />
          <Controller
            control={control}
            name="active"
            render={({ field }) => (
              <Flex>
                <Typograph>Status:</Typograph>
                <SelectInput {...field}>
                  <option value="active">Ativo</option>
                  <option value="blocked">Bloqueado</option>
                  <option value="inactive">Inativo</option>
                  <option value="disabled">Desabilitado</option>
                </SelectInput>
              </Flex>
            )}
          />
        </WrapperForm>
        <Button loading={loading}>{modal.editing ? 'Atualizar' : 'Cadastrar'}</Button>
      </Form>
    </Modal>
  )
}

export default FormStudent
