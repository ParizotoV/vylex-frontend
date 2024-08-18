import { Table as TableStyled } from '@/components/atoms/Table'
import { Tbody } from '@/components/atoms/Tbody'
import { ThBody, ThCell } from '@/components/atoms/Th'
import { Thead } from '@/components/atoms/Thead'
import { Tr } from '@/components/atoms/Tr'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Container, ContainerSkeleton } from './Table.styles'
import { TableProps } from './Table.types'

const Table: React.FC<TableProps> = ({ header, rows, loading }) => {
  if (loading) {
    return (
      <ContainerSkeleton>
        <Skeleton containerClassName="flex-1" width="100%" />
        <Skeleton height="350px" />
      </ContainerSkeleton>
    )
  }
  return (
    <Container>
      <TableStyled>
        <Thead>
          <Tr>
            {header.map((head) => (
              <ThCell key={head.id} id={head.id}>
                {head.label}
              </ThCell>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {!!rows &&
            rows.map((row: any, i: number) => (
              <Tr key={i} cell={1}>
                {Object.keys(row).map((key: any, i) => {
                  if (key === 'uuid') return
                  return <ThBody key={i}>{row[key]}</ThBody>
                })}
              </Tr>
            ))}
        </Tbody>
      </TableStyled>
    </Container>
  )
}

export default Table
