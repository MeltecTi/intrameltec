/* eslint-disable no-undef */
import Routes from '@/routes/Routes'
import DropdownProfile from '@/routes/DropdownProfile'
import ResposiveRoutes from '@/routes/ResponsiveRoutes'
import { Badge, Link } from '@nextui-org/react'
import { NotificationIcon } from '@/Components/icons/Icons'

export default function Authenticated ({ user, header, children, unreadNotifications }) {
  return (
    <div className='min-h-screen bg-gray-100'>

      {/* TopBar */}
      <nav className='bg-white border-b border-gray-100'>
        <div className='max-w mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex'>
              <Routes user={user} />
            </div>
            <div className='flex'>
              <Link href={route('notifications')}>
                <Badge color='danger' content={unreadNotifications} shape='circle'>
                  <NotificationIcon className='flex align-middle' size={40} />
                </Badge>
              </Link>
              <DropdownProfile user={user} />
            </div>

          </div>
        </div>
        <ResposiveRoutes user={user} />

      </nav>

      {header && (
        <header className='bg-white shadow'>
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>{header}</div>
        </header>
      )}

      <main>
        {children}
      </main>
    </div>
  )
}
