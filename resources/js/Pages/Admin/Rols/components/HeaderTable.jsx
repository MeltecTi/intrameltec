import { AddIcon } from '@/Components/icons/Icons'
import { Button } from '@nextui-org/react'

export const HeaderTable = ({ openModal }) => {
  return (
    <div className='flex justify-between my-4'>
      <h2 className='font-semibold'>Roles del Sistema</h2>
      <div className='flex gap-2'>
        <Button type='button' className='text-white bg-blue-900 hover:bg-green-600 hover:scale-110' startContent={<AddIcon />} onClick={() => openModal({ operation: 2 })}>
          Añadir rol
        </Button>
        {/* <Button type='button' className='text-white bg-cyan-800 hover:bg-green-600 hover:scale-110' startContent={<AddIcon />} onClick={() => openModal({ operation: 2 })}>
          Añadir permisos
        </Button> */}
      </div>
    </div>
  )
}
