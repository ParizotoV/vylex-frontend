export type PaginationProps = {
  updatePer: (value: number) => void
  updatePage: (value: number) => void
  per: number
  totalCount: number
  page: number
  next: number | null
  previous: number | null
}

export type ButtonPaginateProps = {
  disabled?: number | null
}
