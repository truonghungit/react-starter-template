import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { Link, LinkProps, Outlet, useMatch, useResolvedPath } from 'react-router-dom';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Dashboard', to: '/dashboard', current: true },
  { name: 'Users', to: '/users', current: false },
  { name: 'Projects', to: '/projects', current: false },
  { name: 'Calendar', to: '/calendar', current: false },
  { name: 'Reports', to: '/reports', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ');
}

function StyledLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      {...props}
      className={classNames(
        match ? 'bg-indigo-700 text-white' : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
        'px-3 py-2 rounded-md text-sm font-medium',
      )}
    >
      {children}
    </Link>
  );
}

export default function StackedLayout() {
  return (
    <>
      <div className='min-h-full'>
        <Disclosure as='nav' className='bg-indigo-600'>
          {({ open }) => (
            <>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <Link to={'/'}>
                        <img className='h-8 w-8' src='images/logo.png' alt='Coffee and Code Logo' />
                      </Link>
                    </div>
                    <div className='hidden md:block'>
                      <div className='ml-10 flex items-baseline space-x-4'>
                        {navigation.map(item => (
                          <StyledLink key={item.name} to={item.to} aria-current={item.current ? 'page' : undefined}>
                            {item.name}
                          </StyledLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-4 flex items-center md:ml-6'>
                      <button
                        type='button'
                        className='p-1 bg-indigo-600 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white'
                      >
                        <span className='sr-only'>View notifications</span>
                        <BellIcon className='h-6 w-6' aria-hidden='true' />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as='div' className='ml-3 relative'>
                        <div>
                          <Menu.Button className='max-w-xs bg-indigo-600 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white'>
                            <span className='sr-only'>Open user menu</span>
                            <img className='h-8 w-8 rounded-full' src={user.imageUrl} alt='' />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-100'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            {userNavigation.map(item => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700',
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className='-mr-2 flex md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                  {navigation.map(item => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.to}
                      className={classNames(
                        item.current
                          ? 'bg-indigo-700 text-white'
                          : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                        'block px-3 py-2 rounded-md text-base font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className='pt-4 pb-3 border-t border-indigo-700'>
                  <div className='flex items-center px-5'>
                    <div className='flex-shrink-0'>
                      <img className='h-10 w-10 rounded-full' src={user.imageUrl} alt='' />
                    </div>
                    <div className='ml-3'>
                      <div className='text-base font-medium text-white'>{user.name}</div>
                      <div className='text-sm font-medium text-indigo-300'>{user.email}</div>
                    </div>
                    <button
                      type='button'
                      className='ml-auto bg-indigo-600 flex-shrink-0 p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white'
                    >
                      <span className='sr-only'>View notifications</span>
                      <BellIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                  <div className='mt-3 px-2 space-y-1'>
                    {userNavigation.map(item => (
                      <Disclosure.Button
                        key={item.name}
                        as='a'
                        href={item.href}
                        className='block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75'
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className='bg-white shadow-sm'>
          <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-lg leading-6 font-semibold text-gray-900'>Dashboard</h1>
          </div>
        </header>
        <main>
          <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            {/* Replace with your content */}
            <Outlet />
            {/* <div className='px-4 py-4 sm:px-0'>
              <div className='border-4 border-dashed border-gray-200 rounded-lg h-96' />
            </div> */}
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
