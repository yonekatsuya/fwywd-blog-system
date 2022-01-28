import Image from 'next/image';

export default function PageFooter() {
  return (
    <div className='h-80 bg-base-black text-center text-xs text-white'>
      <div className='flex items-center justify-center pt-7'>
        CREATED BY <span className='ml-3 inline-block text-lg'>米 勝矢</span>
      </div>
      <div className='mt-10'>
        <Image
          src='/image/logo_white.png'
          width={91}
          height={110}
          alt='フッターロゴ'
          className='hover:cursor-pointer hover:opacity-75'
        />
      </div>
      <div className='mt-9'>
        <div className='inline-block mr-4'>
          <Image
            src='/image/twitter.png'
            width={18}
            height={15}
            alt='twitterロゴ'
            className='inline-block hover:cursor-pointer hover:opacity-75'
          />
        </div>
        <div className='inline-block'>
          <Image
            src='/image/facebook.png'
            width={18}
            height={15}
            alt='facebookロゴ'
            className='hover:cursor-pointer hover:opacity-75'
          />
        </div>
      </div>
      <div className='mt-5'>© 2022 KIKAGAKU</div>
    </div>
  );
}
