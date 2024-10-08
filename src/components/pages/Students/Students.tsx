import { Button } from '@/components/atoms/Button'
import { Typograph } from '@/components/atoms/Typograph'
import Pagination from '@/components/molecules/Pagination'
import Table from '@/components/molecules/Table'
import TextInput from '@/components/molecules/TextInput'
import FormStudent from '@/components/organisms/FormStudent'
import LoggedTemplate from '@/components/templates/LoggedTemplate'
import { useStudentContext } from '@/context/StudentContext'
import { useDebouce } from '@/hook/useDebouce'
import { StudentService } from '@/services/StudentService'
import React, { useEffect, useState } from 'react'
import { convertToRows } from './Students.mapper'
import { WrapperFilter } from './Students.styles'
import DeleteStudent from './component/DeleteStudent'

const StudentsPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const { updateResult, updateFilters, updateModal, updateDeleteStudent, filters, result, reloadTable } =
    useStudentContext()

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    updateFilters((prevState) => ({ ...prevState, email: event.target.value }))
    debouncedFetch(event.target.value)
    setLoading(false)
  }

  const debouncedFetch = useDebouce(async (value: string) => {
    setLoading(true)
    const response = await StudentService.getallPaginated({ page: filters?.page, per: filters?.per, email: value })

    updateFilters((prevState) => ({
      ...prevState,
      firstPage: response?.meta?.isFirstPage,
      lastPage: response?.meta?.isLastPage,
      totalCount: response?.meta?.totalCount,
      previousPage: response?.meta?.previousPage,
      nextPage: response?.meta?.nextPage
    }))

    updateResult(response?.datas)
    setLoading(false)
  })

  const getStudents = async () => {
    setLoading(true)
    const response = await StudentService.getallPaginated({
      page: filters?.page,
      per: filters?.per,
      email: filters?.email
    })

    updateFilters((prevState) => ({
      ...prevState,
      firstPage: response?.meta?.isFirstPage,
      lastPage: response?.meta?.isLastPage,
      totalCount: response?.meta?.totalCount,
      previousPage: response?.meta?.previousPage,
      nextPage: response?.meta?.nextPage
    }))

    updateResult(response?.datas)
    setLoading(false)
  }

  const handleOpenModal = () => {
    updateModal((prevState) => ({
      ...prevState,
      open: true
    }))
  }

  const handleEditStudent = (id: string) => {
    updateModal({
      editing: true,
      open: true,
      id
    })
  }

  const handleDeleteStudent = (id: string, name: string) => {
    updateDeleteStudent({
      open: true,
      id,
      name
    })
  }

  useEffect(() => {
    getStudents()
  }, [filters?.page, filters?.per, reloadTable])

  return (
    <LoggedTemplate>
      <>
        <Typograph size="LG" bold>
          Alunos
        </Typograph>
        <WrapperFilter>
          <TextInput name="email" placeholder="Buscar por email" onChange={handleChangeEmail} value={filters?.email} />
          <Button onClick={handleOpenModal}>Novo aluno</Button>
        </WrapperFilter>
        <Table
          header={[
            { id: 'name', label: 'Nome' },
            { id: 'document', label: 'Documento' },
            { id: 'birth', label: 'Dat. Nascimento' },
            { id: 'class', label: 'N° Matricula' },
            { id: 'active', label: 'Ativo' },
            { id: 'actions', label: '' }
          ]}
          rows={convertToRows(result, { handleDeleteStudent })}
          loading={loading}
          rowAction={handleEditStudent}
        />
        <Pagination
          page={filters?.page}
          per={filters?.per}
          totalCount={filters?.totalCount}
          updatePer={(value: number) => {
            updateFilters((prevState) => ({
              ...prevState,
              per: value,
              page: 1
            }))
          }}
          updatePage={(value: number) => {
            updateFilters((prevState) => ({
              ...prevState,
              page: value
            }))
          }}
          next={filters?.nextPage}
          previous={filters?.previousPage}
        />
        <FormStudent />
        <DeleteStudent />
      </>
    </LoggedTemplate>
  )
}

export default StudentsPage
