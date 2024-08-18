import { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react'
import { FiltersTableParams, Student } from './StudentContext.types'

export type AuthContextType = {
  filters: FiltersTableParams
  result: Student[]
  updateFilters: Dispatch<SetStateAction<FiltersTableParams>>
  updateResult: Dispatch<SetStateAction<Student[]>>
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

  const value = useMemo(
    () => ({
      filters,
      result,
      updateFilters: setFilters,
      updateResult: setResult
    }),
    [filters, setFilters, result, setResult]
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
