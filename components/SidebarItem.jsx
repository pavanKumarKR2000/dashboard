import React from 'react'
import Link from 'next/link';

const SidebarItem = ({ Icon, active,url }) => { 

  return (
    <div className='flex flex-col items-center'>
        <Link href={url}>
              <div className={`${active?'bg-purple-800 text-white':'bg-gray-100 hover:bg-gray-200 text-black'} rounded-md p-3 inline-block`}>
                <Icon size={20} />
            </div>
        </Link> 
        <span className='w-full p-2 border-b border-gray-200'></span>
    </div>
  )
}

export default SidebarItem;