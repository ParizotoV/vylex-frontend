export type TableProps = {
  header: HeaderProps[]
  rows: any
  loading: boolean
  rowAction?: (id: string) => void
}

export type HeaderProps = {
  id: string
  label: JSX.Element | string
}
