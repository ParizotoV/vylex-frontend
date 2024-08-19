import { Button } from '@/components/atoms/Button'
import { SelectInput } from '@/components/atoms/Select'
import { Typograph } from '@/components/atoms/Typograph'
import InputMask from '@/components/molecules/InputMask'
import NumberInput from '@/components/molecules/NumberInput'
import PhoneInput from '@/components/molecules/PhoneInput'
import TextInput from '@/components/molecules/TextInput'
import { useStudentContext } from '@/context/StudentContext'
import { StudentService } from '@/services/StudentService'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
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
      console.log(modal)
      if (modal.editing) {
        await StudentService.updateStudent(modal.id, dataForm)
      } else {
        await StudentService.createStudent(dataForm)
      }
      updateTable((prevState) => !prevState)
      handleCloseModal()
      toast.success(`Estudante ${modal.editing ? 'atualizado' : 'criado'} com sucesso.`)
    } catch (err) {
      toast.error(`Erro ao ${modal.editing ? 'editar' : 'criar'} estudante.`)
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

  const getStudent = async () => {
    setLoading(true)
    const response = await StudentService.getStudent(modal.id)
    reset({
      ...response
    })
    setLoading(false)
  }

  useEffect(() => {
    if (modal.id !== '') {
      getStudent()
    }
  }, [modal.id])

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
              <TextInput
                {...field}
                error={!!error?.message}
                helperText={error?.message}
                label="Nome:"
                fullWidth
                disabled={loading}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <TextInput
                {...field}
                error={!!error?.message}
                helperText={error?.message}
                label="Email:"
                fullWidth
                disabled={loading}
              />
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
                disabled={loading}
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
                disabled={loading}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field, fieldState: { error } }) => (
              <PhoneInput
                {...field}
                error={!!error?.message}
                helperText={error?.message}
                label="Telefone:"
                disabled={loading}
              />
            )}
          />
          <Controller
            control={control}
            name="document"
            render={({ field, fieldState: { error } }) => (
              <NumberInput
                {...field}
                onChange={(event) => {
                  if (event.target.value.length <= 11) field.onChange(event.target.value)
                }}
                error={!!error?.message}
                helperText={error?.message}
                label="Documento:"
                fullWidth
                disabled={loading}
              />
            )}
          />
          <Controller
            control={control}
            name="cep"
            render={({ field, fieldState: { error } }) => (
              <TextInput
                {...field}
                error={!!error?.message}
                helperText={error?.message}
                label="CEP:"
                fullWidth
                disabled={loading}
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field, fieldState: { error } }) => (
              <TextInput
                {...field}
                error={!!error?.message}
                helperText={error?.message}
                label="Endereço:"
                fullWidth
                disabled={loading}
              />
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
                disabled={loading}
              />
            )}
          />
          <Controller
            control={control}
            name="city"
            render={({ field, fieldState: { error } }) => (
              <TextInput
                {...field}
                error={!!error?.message}
                helperText={error?.message}
                label="Cidade:"
                fullWidth
                disabled={loading}
              />
            )}
          />
          <Controller
            control={control}
            name="neighborhood"
            render={({ field, fieldState: { error } }) => (
              <TextInput
                {...field}
                error={!!error?.message}
                helperText={error?.message}
                label="Bairro:"
                fullWidth
                disabled={loading}
              />
            )}
          />
          <Controller
            control={control}
            name="active"
            render={({ field }) => (
              <Flex>
                <Typograph>Status:</Typograph>
                <SelectInput {...field} disabled={loading}>
                  <option value="active">Ativo</option>
                  <option value="blocked">Bloqueado</option>
                  <option value="inactive">Inativo</option>
                  <option value="disabled">Desabilitado</option>
                </SelectInput>
              </Flex>
            )}
          />
        </WrapperForm>
        <Button loading={loading} disabled={loading}>
          {modal.editing ? 'Atualizar' : 'Cadastrar'}
        </Button>
      </Form>
    </Modal>
  )
}

export default FormStudent
