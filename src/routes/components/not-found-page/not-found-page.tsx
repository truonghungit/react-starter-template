import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <div className='min-h-full pt-16 pb-12 flex flex-col bg-white'>
        <main className='flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex-shrink-0 flex justify-center'>
            <Link to='/' className='inline-flex'>
              <span className='sr-only'>Coffee and Code Logo</span>
              <img className='h-12 w-auto' src='images/logo.png' alt='Coffee and Code Logo' />
            </Link>
          </div>
          <div className='py-16'>
            <div className='text-center'>
              <h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>Page not found.</h1>
              <p className='mt-2 text-base text-gray-500'>Sorry, we couldn’t find the page you’re looking for.</p>
              <div className='mt-6'>
                <Link to='/' className='text-base font-medium text-indigo-600 hover:text-indigo-500'>
                  Go back home<span aria-hidden='true'> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer className='flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <nav className='flex justify-center space-x-4'>
            <a href='# Contact Support' className='text-sm font-medium text-gray-500 hover:text-gray-600'>
              Contact Support
            </a>
            <span className='inline-block border-l border-gray-300' aria-hidden='true' />
            <a href='# Status' className='text-sm font-medium text-gray-500 hover:text-gray-600'>
              Status
            </a>
            <span className='inline-block border-l border-gray-300' aria-hidden='true' />
            <a href='#Twitter' className='text-sm font-medium text-gray-500 hover:text-gray-600'>
              Twitter
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}
