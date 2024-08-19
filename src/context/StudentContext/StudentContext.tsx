import { createContext, useContext, useMemo, useState } from 'react'
import {
  AuthContextType,
  DeleteStudentParams,
  FiltersTableParams,
  ModalParams,
  Student,
  StudentProviderProps
} from './StudentContext.types'

export function StudentProvider({ children }: StudentProviderProps) {
  const [filters, setFilters] = useState<FiltersTableParams>({
    page: 1,
    per: 25,
    totalCount: 0,
    lastPage: true,
    firstPage: true,
    previousPage: null,
    nextPage: null,
    email: undefined
  })

  const [result, setResult] = useState<Student[]>([])
  const [reloadTable, setReloadTable] = useState<boolean>(false)

  const [modal, setModal] = useState<ModalParams>({
    id: '',
    editing: false,
    open: false
  })
  const [deleteStudent, setDeleteStudent] = useState<DeleteStudentParams>({
    open: false,
    id: '',
    name: ''
  })

  const value = useMemo(
    () => ({
      filters,
      result,
      modal,
      reloadTable,
      deleteStudent,
      updateFilters: setFilters,
      updateResult: setResult,
      updateModal: setModal,
      updateTable: setReloadTable,
      updateDeleteStudent: setDeleteStudent
    }),
    [filters, setFilters, result, setResult, modal, setModal, deleteStudent, setDeleteStudent]
  )

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
}

export const StudentContext = createContext({} as AuthContextType)

export const useStudentContext = (): AuthContextType => {
  const context = useContext(StudentContext)

  if (!context) {
    throw new Error('useStudentContext should be used within an AuthContext')
  }

  return context as AuthContextType
}
