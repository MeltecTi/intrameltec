/* eslint-disable no-undef */
import { Table, TableColumn, TableHeader, TableBody, TableCell, TableRow } from '@nextui-org/react'
import { TABLE_KPIS_HEADER } from '@/constants/initialValues'
import { Link, usePage } from '@inertiajs/react'

export default function KpisTable ({ data, paginate }) {
  const { auth } = usePage().props
  const getClassName = (active) => {
    if (active) {
      return 'mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 text-white'
    } else {
      return 'mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary'
    }
  }
  return (
    <Table
      aria-label='Tabla de informes de PowerBy' bottomContent={
        <div className='flex w-full justify-center'>
          {
                    paginate.map((page, index) => (
                      page.url === null
                        ? (
                          <div
                            key={index}
                            className='mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded'
                          ><p dangerouslySetInnerHTML={{ __html: page.label }} />
                          </div>
                          )
                        : (
                          <Link
                            key={index}
                            className={getClassName(page.active)}
                            href={page.url}
                          ><p dangerouslySetInnerHTML={{ __html: page.label }} />
                          </Link>
                          )
                    ))
                  }
        </div>
    }
    >
      <TableHeader>
        {TABLE_KPIS_HEADER.map((header, i) => (
          <TableColumn key={i} className='text-center'>{header}</TableColumn>
        ))}
      </TableHeader>
      {
        data.length === 0
          ? (
            <TableBody emptyContent='No hay Informes Subidos'>{[]}</TableBody>
            )
          : (
            <TableBody>
              {data.map(({ id, name, roles }) => {
                const userHasRole = roles.find(role => role.name === auth.userRole[0])
                if (userHasRole) {
                  return (
                    <TableRow key={id} className='text-center'>
                      <TableCell>{name}</TableCell>
                      <TableCell>
                        <p className='text-red-500 font-semibold italic'> LA URL DEL REPORTE NO SE PUEDE MOSTRAR </p>
                      </TableCell>
                      <TableCell>
                        <Link className='primary' href={route('kpi.reports.show', id)}>Ver</Link>
                      </TableCell>
                    </TableRow>
                  )
                } else {
                  return null
                }
              })}
            </TableBody>
            )
      }

    </Table>
  )
}
