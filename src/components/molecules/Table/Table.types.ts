export type TableProps = {
  header: HeaderProps[]
  rows: any
  loading: boolean
}

export type HeaderProps = {
  id: string
  label: JSX.Element | string
}
