import Image from 'next/image';

export default function PageHeader() {
  return (
    <>
      <div className='h-[70px]'>
        <div className='float-left'>
          <Image
            src='/image/logo.png'
            width={160}
            height={80}
            alt='ロゴ'
            className='hover:cursor-pointer hover:opacity-75'
          />
        </div>
        <div className='float-right flex h-full items-center justify-center'>
          <div className='mr-4 flex h-[50px] w-[180px] items-center justify-center rounded-md bg-base-green text-center text-white'>
            投稿
          </div>
          <div
            className='mr-4 flex h-[50px] w-[180px] items-center justify-center rounded-md text-center text-white'
            style={{ border: '2px solid #2bb9ba' }}
          >
            <span className='text-base-green'>ログアウト</span>
          </div>
        </div>
      </div>
      <div className='clear-both'></div>
    </>
  );
}
