import classNames from 'classnames';

export type FeatureProps = {
  title: string;
  description: string;
  className?: string;
};

export default function Feature({ title, description, className }: FeatureProps) {
  const featureClass = classNames(
    'relative flex flex-col items-center justify-between col-span-4 px-8 py-8 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl',
    className,
  );

  return (
    <div className={featureClass}>
      <div className='p-3 text-white bg-blue-500 rounded-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 h-8 '
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M14 3v4a1 1 0 0 0 1 1h4' />
          <path d='M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5' />
          <circle cx={6} cy={14} r={3} />
          <path d='M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5' />
        </svg>
      </div>
      <h4 className='text-xl font-medium text-gray-700'>{title}</h4>
      <p className='text-base text-center text-gray-500'>{description}</p>
    </div>
  );
}
