import { Table as TableStyled } from '@/components/atoms/Table'
import { Tbody } from '@/components/atoms/Tbody'
import { ThBody, ThCell } from '@/components/atoms/Th'
import { Thead } from '@/components/atoms/Thead'
import { Tr } from '@/components/atoms/Tr'
import React from 'react'
import { TableProps } from './Table.types'

const Table: React.FC<TableProps> = ({ header, rows }) => {
  return (
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
        <Tr cell={1}>
          {rows.map((component, i) => (
            <ThBody key={i}>{component}</ThBody>
          ))}
        </Tr>
      </Tbody>
    </TableStyled>
  )
}

export default Table
