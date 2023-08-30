import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm } from '@inertiajs/react'
import { useState } from 'react'
import { RolsTable } from './components/RolsTable'
import { HeaderTable } from './components/HeaderTable'
import { ModalRols } from './components/Modal'

export default function Rols ({ auth, roles, permission }) {
  const [modal, setModal] = useState(false)
  const [operation, setOperation] = useState(1)
  const [title, setTitle] = useState('')
  const [showPermissions, setPermissions] = useState([])
  const { reset } = useForm({ nameRol: '', permissions: [] })

  const openModal = ({ operation = 1, title = '', permisos = [] }) => {
    setModal(true)
    setOperation(operation)

    switch (operation) {
      case 1:
        setTitle('Permisos del Rol ' + title)
        setPermissions(permisos)
        break
      case 2:
        setTitle('Nuevo Rol de Usuario')
        permisos = permission
        setPermissions(permisos)
        break
      case 3:
        setTitle('Editar Rol ' + title)
        setPermissions(permisos)
        break
      case 4:
        setTitle('Nuevos Permisos')
        setPermissions(permisos)
        break
      default:
        setTitle('')
        setPermissions([])
        break
    }
  }

  const closeModal = () => {
    setModal(false)
    reset()
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Roles y Permisos</h2>}
    >
      <Head title='Roles y Permisos' />

      <section className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='p-6'>
              <HeaderTable openModal={openModal} auth={auth} />
              <RolsTable openModal={openModal} roles={roles} />
            </div>
          </div>
        </div>
      </section>

      <ModalRols modal={modal} closeModal={closeModal} title={title} showPermissions={showPermissions} operation={operation} />
    </AuthenticatedLayout>
  )
}