import Image from 'next/image';

export default function Hero() {
  return (
    <div className='flex h-72 bg-thin-green bg-hero-back bg-cover bg-center'>
      <div className='flex w-2/4 items-center justify-center pr-36 text-white'>
        <span className='mr-3 inline-block text-3xl font-bold'>ブログ</span>
        <span className='text-xl'>BLOG</span>
      </div>
      <div className='flex w-2/4 items-center pl-9'>
        <Image src='/image/hero.png' width={421} height={250} alt='Hero' />
      </div>
    </div>
  );
}
