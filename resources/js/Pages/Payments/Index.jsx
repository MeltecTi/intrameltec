import Header from '@/Components/Header'
import SapLoader from '@/Components/SapLoader'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import TablePayments from './Components/TablePayments'
import { useEpayco } from '@/hooks/useEpayco'
import Error from '@/Components/Error'

export default function Payment ({ auth, unreadNotifications, token, message = '' }) {
  const { transactions, loading, error } = useEpayco({ token, message })

  return (
    <AuthenticatedLayout
      auth={auth}
      unreadNotifications={unreadNotifications}
      header={<Header title='Historial de Transacciones Epayco Meltec' />}
    >
      <Head title='Historial de Transacciones Epayco Meltec' />

      <section className='py-12'>
        <div className='max-w-fullmx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='p-6'>

              {loading && <SapLoader message='Obteniendo transacciones, espere por favor' />}

              {transactions && <TablePayments transactions={transactions} token={token} />}

              {error && <Error message={error} />}
            </div>
          </div>
        </div>
      </section>

    </AuthenticatedLayout>
  )
}
