import { Dispatch, SetStateAction } from 'react'

export type FiltersTableParams = {
  page: number
  per: number
  email?: string
  totalCount: number
  lastPage: boolean
  firstPage: boolean
  previousPage: number | null
  nextPage: number | null
}

export type Student = {
  id: string
  name: string
  registrationNumber: number
  dateBirth: string
  document: string
  address: string
  cep: string
  neighborhood: string
  city: string
  complement: string | null
  phone: string
  email: string
  active: 'active' | 'blocked' | 'inactive' | 'disabled'
  createdAt: Date
  updatedAt: Date
}

export type AuthContextType = {
  filters: FiltersTableParams
  result: Student[]
  modal: ModalParams
  reloadTable: boolean
  deleteStudent: DeleteStudentParams
  updateFilters: Dispatch<SetStateAction<FiltersTableParams>>
  updateResult: Dispatch<SetStateAction<Student[]>>
  updateModal: Dispatch<SetStateAction<ModalParams>>
  updateTable: Dispatch<SetStateAction<boolean>>
  updateDeleteStudent: Dispatch<SetStateAction<DeleteStudentParams>>
}

export type ModalParams = {
  editing: boolean
  id: string
  open: boolean
}

export type DeleteStudentParams = {
  open: boolean
  id: string
  name: string
}

export type StudentProviderProps = {
  children: React.ReactNode
}
