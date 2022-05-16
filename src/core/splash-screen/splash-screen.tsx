import './splash-screen.scss';

export function SplashScreen() {
  return (
    <div className='splash-screen'>
      <img className='h-20 w-auto' src='images/logo.png' alt='Coffee and Code Logo' />
      <div className='mt-8'>
        <div className='dot-typing'></div>
      </div>
    </div>
  );
}
