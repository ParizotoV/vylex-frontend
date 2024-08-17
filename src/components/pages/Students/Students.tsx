import LoggedTemplate from '@/components/templates/LoggedTemplate/LoggedTemplate'
import React from 'react'

const StudentsPage: React.FC = () => {
  return (
    <LoggedTemplate>
      <h1>ola</h1>
      {/* <Table
        header={[
          { id: 'name', label: 'Nome' },
          { id: 'document', label: 'Documento' },
          { id: 'birth', label: 'Dat. Nascimento' },
          { id: 'class', label: 'Turma' },
          { id: 'active', label: 'Ativo' },
          { id: 'actions', label: '' }
        ]}
        rows={}
      /> */}
    </LoggedTemplate>
  )
}

export default StudentsPage
