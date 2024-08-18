import { Student } from '@/context/StudentContext/StudentContext.types'
import { StatusStudent } from '@/utils/enums'
import moment from 'moment'

const createDataTable = (data: Student) => {
  console.log(data)
  return {
    uuid: data?.id,
    name: data?.name,
    documet: data?.document,
    birth: moment(data?.dateBirth).format('DD/MM/yyyy'),
    class: data?.registrationNumber,
    active: StatusStudent[data?.active],
    actions: ''
  }
}

export const convertToRows = (data: Student[]) => {
  if (data.length === 0) return
  return data.map((register) => {
    return createDataTable(register)
  })
}
