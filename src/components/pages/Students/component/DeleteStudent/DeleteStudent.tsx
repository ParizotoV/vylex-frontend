import { Button } from '@/components/atoms/Button'
import { Typograph } from '@/components/atoms/Typograph'
import { useStudentContext } from '@/context/StudentContext'
import { StudentService } from '@/services/StudentService'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
import { toast } from 'react-toastify'
import { WrapperButtom, WrapperIcon, WrapperInfos } from './DeleteStudent.styles'

const DeleteStudent: React.FC = () => {
  const { deleteStudent, updateDeleteStudent, updateTable } = useStudentContext()
  const [loading, setLoading] = useState<boolean>(false)

  const handleClose = () => {
    updateDeleteStudent({
      id: '',
      name: '',
      open: false
    })
  }

  const handleDelete = async () => {
    try {
      setLoading(true)
      await StudentService.deleteStudent(deleteStudent.id)
      updateTable((prevState) => !prevState)
      handleClose()
    } catch (error) {
      toast.error('Ocorreu um erro ao excluir estudante.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal open={deleteStudent.open} onClose={handleClose} center>
      <WrapperIcon>
        <FontAwesomeIcon icon={faTrash} color="#888888" style={{ width: '68px', height: '68px' }} />
      </WrapperIcon>
      <WrapperInfos>
        <Typograph size="LG" bold>
          Excluir estudante
        </Typograph>
        <Typograph>Voce deseja excluir o estudante {deleteStudent.name}?</Typograph>
        <WrapperButtom>
          <Button onClick={handleDelete} fullWidth loading={loading} disabled={loading}>
            Excluir
          </Button>
          <Button onClick={handleClose} fullWidth disabled={loading}>
            Cancelar
          </Button>
        </WrapperButtom>
      </WrapperInfos>
    </Modal>
  )
}

export default DeleteStudent
