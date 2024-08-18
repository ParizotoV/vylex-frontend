import { Select } from '@/components/atoms/Select'
import { Typograph } from '@/components/atoms/Typograph'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ButtonPaginate, Container, WrapperInfos } from './Pagination.styles'
import { PaginationProps } from './Pagination.types'

const Pagination: React.FC<PaginationProps> = ({ per, totalCount, page, updatePer, next, previous, updatePage }) => {
  const calculateViewInPage = () => {
    if (page === 1) {
      return `${page}-${per > totalCount ? totalCount : per}`
    }
    const down = page * per - per + 1
    const up = page * per > totalCount ? totalCount : page * per
    return `${down}-${up}`
  }

  return (
    <Container>
      <WrapperInfos>
        <Typograph>Registros por pagina:</Typograph>
        <Select value={per} onChange={(event) => updatePer(Number(event.target.value))}>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </Select>
        <Typograph>
          {calculateViewInPage()} de {totalCount}
        </Typograph>
        <ButtonPaginate
          disabled={previous}
          onClick={() => {
            if (!!previous) {
              updatePage(page - 1)
            }
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </ButtonPaginate>
        <ButtonPaginate
          disabled={next}
          onClick={() => {
            if (!!next) {
              updatePage(page + 1)
            }
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </ButtonPaginate>
      </WrapperInfos>
    </Container>
  )
}

export default Pagination
