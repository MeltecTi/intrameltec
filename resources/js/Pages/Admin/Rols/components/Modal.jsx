import { useState } from 'react'
import { useForm } from '@inertiajs/react'

import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import Modal from '@/Components/Modal'
import InputError from '@/Components/InputError'
import { Input } from '@nextui-org/input'
import { Checkbox, CheckboxGroup } from '@nextui-org/react'

export const ModalRols = ({ modal, closeModal, title, showPermissions, operation }) => {
  const [checked, setChecked] = useState([])
  const { data, setData, post, put, processing, errors, reset } = useForm({ nameRol: '', permissions: [] })

  const handleInputChange = (e) => {
    let updateList = [...checked]
    if (e.target.checked) {
      updateList = [...checked, e.target.value]
    } else {
      updateList.splice(checked.indexOf(e.target.value))
    }
    setChecked(updateList)

    setData({ ...data, permissions: updateList })
  }

  const handelNewText = (e) => {
    setData({ ...data, nameRol: e.target.value })
  }

  const save = (e) => {
    e.preventDefault()
    post('/rols', data)
    reset()
    closeModal()
  }

  return (
    <Modal show={modal} onClose={closeModal}>
      <div className='p-6'>
        <h2 className='text-lg font-medium text-gray-600 text-center'>{title}</h2>
        <form onSubmit={save}>
          <div className='my-6'>
            <Input type='text' onChange={handelNewText} value={data.nameRol} label='Nombre de Rol a Crear' isRequired radius='sm' />
          </div>
          <InputError message={errors.nameRol} className='mt-2' />
          <CheckboxGroup label='Selecciona los permisos'>
            {showPermissions.map(({ id, name }) => (
              <Checkbox key={id} type='checkbox' value={id} onChange={handleInputChange}>{name}</Checkbox>
            ))}
          </CheckboxGroup>
          <div className='mt-6 flex justify-end gap-6'>
            {operation === 2 ? <PrimaryButton type='submit'>Crear</PrimaryButton> : ''}
            <SecondaryButton onClick={closeModal}>Cerrar</SecondaryButton>
          </div>
        </form>
      </div>
    </Modal>
  )
}
