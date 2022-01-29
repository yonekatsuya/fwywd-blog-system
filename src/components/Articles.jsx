import Image from 'next/image';
import Link from 'next/link';

export default function Articles(props) {
  const page_list = props.page_info.pages;
  const next_link = `/?next_cursor=${props.page_info.next_cursor}`;

  return (
    <div className='bg-gray-200'>
      <div className='flex justify-center'>
        <div className='my-10 flex w-3/4 flex-wrap justify-between'>
          {page_list.map((page) => {
            return (
              <div className='mt-8 w-[31%]'>
                <div className='h-40 bg-future bg-cover'></div>
                <div className='h-48 bg-white'>
                  <div className='h-full p-4'>
                    <div className='text-sm text-gray-500'>
                      {page[2].split('T')[0].replace(/-/g, '.')}
                    </div>
                    <div className='mt-3 break-all text-xl font-bold'>{page[1]}</div>
                    <div className='flex flex-wrap text-gray-500'>
                      {page[3].map((tag) => {
                        return (
                          <>
                            <div
                              className='mr-2 mt-3 w-[30%] rounded'
                              style={{ border: '1px solid #6b7280' }}
                            >
                              <div className='p-1 text-center text-xs'>{tag}</div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='pt-4 pb-10 text-center'>
        <Link href={next_link}>
          <a>次へ</a>
        </Link>
      </div>
    </div>
  );
}
