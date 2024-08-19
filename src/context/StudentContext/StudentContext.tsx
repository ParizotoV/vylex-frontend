import { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react'
import { FiltersTableParams, ModalProps, Student } from './StudentContext.types'

export type AuthContextType = {
  filters: FiltersTableParams
  result: Student[]
  modal: ModalProps
  reloadTable: boolean
  updateFilters: Dispatch<SetStateAction<FiltersTableParams>>
  updateResult: Dispatch<SetStateAction<Student[]>>
  updateModal: Dispatch<SetStateAction<ModalProps>>
  updateTable: Dispatch<SetStateAction<boolean>>
}

type StudentProviderProps = {
  children: React.ReactNode
}

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

  const [modal, setModal] = useState<ModalProps>({
    id: '',
    editing: false,
    open: false
  })

  const value = useMemo(
    () => ({
      filters,
      result,
      modal,
      reloadTable,
      updateFilters: setFilters,
      updateResult: setResult,
      updateModal: setModal,
      updateTable: setReloadTable
    }),
    [filters, setFilters, result, setResult, modal, setModal]
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
