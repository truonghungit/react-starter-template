import { NavLink, NavLinkProps, Outlet } from 'react-router-dom';

const defaultNavLinkClassName =
  'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';
const activeNavLinkClassName = 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium';

const Link = ({ to, children }: NavLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        console.log('Active', isActive);
        return isActive ? activeNavLinkClassName : defaultNavLinkClassName;
      }}
    >
      {children}
    </NavLink>
  );
};

export default function StackedLayout() {
  return (
    <div className='min-h-full'>
      <nav className='bg-gray-800'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='h-8 w-8'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                  alt='Workflow'
                />
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <Link to='dashboard'>Dashboard</Link>
                  <Link to='users'>Users</Link>
                  <Link to='projects'>Projects</Link>
                  <Link to='reports'>Reports</Link>
                </div>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='ml-4 flex items-center md:ml-6'>
                <button
                  type='button'
                  className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                >
                  <span className='sr-only'>View notifications</span>
                  {/* <!-- Heroicon name: outline/bell --> */}
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                    />
                  </svg>
                </button>

                {/* <!-- Profile dropdown --> */}
                <div className='ml-3 relative'>
                  <div>
                    <button
                      type='button'
                      className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                      id='user-menu-button'
                      aria-expanded='false'
                      aria-haspopup='true'
                    >
                      <span className='sr-only'>Open user menu</span>
                      <img className='h-8 w-8 rounded-full' src='https://images.unsplash.com' alt='' />
                    </button>
                  </div>

                  {/* <div
                    className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu-button'
                    tabIndex={-1}
                  >
                    <a
                      href='Your Profile'
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex={-1}
                      id='user-menu-item-0'
                    >
                      Your Profile
                    </a>

                    <a
                      href='Settings'
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex={-1}
                      id='user-menu-item-1'
                    >
                      Settings
                    </a>

                    <a
                      href='Sign out'
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex={-1}
                      id='user-menu-item-2'
                    >
                      Sign out
                    </a>
                  </div>
                   */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className='bg-white shadow-sm'>
        <div className='mx-auto py-4 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-lg leading-6 font-semibold text-gray-900'>Dashboard</h1>
        </div>
      </header>

      <main>
        <div className='mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-4 sm:px-0'>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
