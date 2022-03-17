export default function Header() {
  return (
    <header className='container mx-auto xl:max-w-7xl px-4 py-32 text-left md:max-w-none md:text-center'>
      <h1 className='text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-50 md:text-center sm:leading-none md:text-6xl lg:text-7xl'>
        <span className='inline md:block'>Start Crafting Your</span>{' '}
        <span className='relative mt-2 text-gray-50 bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block'>
          Next Great Idea
        </span>
      </h1>
      <div className='mx-auto mt-5 text-gray-300 md:mt-12 md:max-w-lg md:text-center lg:text-lg'>
        Simplifying the creation of landing pages, application pages, dashboard pages and so much more!
      </div>
      <div className='flex flex-col items-center mt-12 text-center'>
        <span className='relative inline-flex w-auto select-none'>
          <a
            href='https://github.com/truonghungit/react-starter-template'
            className='inline-flex items-center justify-center w-full px-12 py-4 text-base font-bold leading-6 text-indigo-700 bg-white border border-transparent rounded-full md:w-auto hover:bg-gray-100 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
            rel='noreferrer'
          >
            Get Started
          </a>
        </span>
      </div>
    </header>
  );
}
