export type TableProps = {
  header: HeaderProps[]
  rows: JSX.Element[]
}

export type HeaderProps = {
  id: string
  label: JSX.Element | string
}
