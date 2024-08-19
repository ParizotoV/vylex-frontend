import { Student } from '@/context/StudentContext/StudentContext.types'
import { StatusStudent } from '@/utils/enums'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import { Actions, ButtonAction } from './Students.styles'

type CreateDataTableReturn = {
  uuid: string
  name: string
  document: string
  birth: string
  class: number
  active: string
  actions: JSX.Element
}

const createDataTable = (data: Student, actions: ActionsParams): CreateDataTableReturn => {
  return {
    uuid: data?.id,
    name: data?.name,
    document: data?.document,
    birth: moment(data?.dateBirth).format('DD/MM/yyyy'),
    class: data?.registrationNumber,
    active: StatusStudent[data?.active],
    actions: (
      <Actions>
        <ButtonAction onClick={() => actions.handleDeleteStudent(data?.id, data?.name)}>
          <FontAwesomeIcon icon={faTrash} />
        </ButtonAction>
      </Actions>
    )
  }
}

type ActionsParams = {
  handleDeleteStudent: (id: string, name: string) => void
}

export const convertToRows = (data: Student[], actions: ActionsParams) => {
  if (data.length === 0) return
  return data.map((register) => {
    return createDataTable(register, actions)
  })
}
