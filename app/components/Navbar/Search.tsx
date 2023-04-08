'use client';

import { BiSearch } from 'react-icons/bi';

export default function Search() {
  return (
    <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
      <div className='flex flex-row items-center justify-between'>
        <div className='text-sm font-semibold px-6'>Anywhere</div>
        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] text-center flex-1'>
          Any Week
        </div>
        <div className='flex flex-row pl-6 pr-2 gap-3 items-center text-gray-500 '>
          <div className='hidden sm:block'>Add Guests</div>
          <div className='p-2 text-white rounded-full bg-rose-500'>
            <BiSearch size={18} />
          </div>
          {/* Search here */}
        </div>
      </div>
    </div>
  );
}
