import { Button } from '@nextui-org/react';
import { showAlert, handleSwalError, handleSwalSuccess } from '@/helpers/swalHelper';
import axios from 'axios';
import { usePage } from '@inertiajs/react';

export default function DeleteButton () {
  const { uuid } = usePage().props; // Obtiene el UUID de las props usando usePage
  const handleDelete = async (uuid) => { // No necesitas pasar uuid como argumento aquí
    showAlert({
      title: 'Advertencia',
      icon: 'warning',
      text: '¿Seguro desea eliminar el elemento?'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const request = await axios.delete(route('kpi.reports.destroy', uuid))
          if (request.status !== 200) {
            throw new Error(request.data.message)
          } else {
            handleSwalSuccess({ message: request.data.message }).then((result) => { if (result.isConfirmed) { window.location.reload() } })
          }
        } catch (error) {
          handleSwalError({ message: error.message })
        }
      }
    })
  };

  return (
    <Button className='text-white bg-red-800 px-5 py-2 rounded-lg mx-1 hover:bg-red-600 transition ease-out' color='danger' size='sm' onPress={() => handleDelete(uuid)}>
      Borrar
    </Button>
  )
}
