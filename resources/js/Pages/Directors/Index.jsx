import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

export default function Directors ({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className='font-semibold text-xl text-gray-800 leading-tight'>Informe de KPIS</h2>}
    >
      <Head title='Informe de KPIS' />

      <section className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <h2 className='text-center font-bold text-xl mt-3'>
              Informes de KPI Meltec
            </h2>
            <div className='p-6'>
              <iframe
                title='Report Section'
                width='100%'
                height='804'
                src='https://app.powerbi.com/view?r=eyJrIjoiM2U5ZTZmYWUtNjI2MS00M2M2LWFhMWQtODk1MTQwNGQyMTAxIiwidCI6ImQzOTZjNGY4LTMyOTgtNDg5ZS04YmQ0LTFkZjZiMmE0NzE4NCJ9'
                frameBorder='0'
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  )
}