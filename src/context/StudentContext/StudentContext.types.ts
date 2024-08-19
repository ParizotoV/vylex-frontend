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

export type ModalProps = {
  editing: boolean
  id: string
  open: boolean
}
