import React, { useEffect, useState } from 'react'
import SidebarItem from './SidebarItem';
import { IoBagHandleOutline, IoPersonOutline,IoInformationOutline, IoGridOutline, IoSettingsOutline } from "react-icons/io5";
import { useRouter } from 'next/router'


const Sidebar = ({ children }) => {
    
    const router = useRouter();
   
  return (
      <div className='flex max-w-[1600px] mx-auto'>
          <aside>
              <div className='fixed flex flex-col w-20 h-screen p-4 space-y-4 bg-white border-r'>
                  <SidebarItem Icon={IoInformationOutline} url="/" active={router.pathname==='/'} />
                  <SidebarItem Icon={IoGridOutline} url="/dashboard" active={router.pathname==='/dashboard'}/>
                  <SidebarItem Icon={IoPersonOutline} url="/customers" active={router.pathname==='/customers'} />
                  <SidebarItem Icon={IoBagHandleOutline} url="/orders" active={router.pathname==='/orders'} />
                  <SidebarItem Icon={IoSettingsOutline} url="/settings" active={router.pathname==='/settings'}  />
              </div>
          </aside>
          <main className='flex-grow ml-20'>{children}</main>
      </div>
  )
}

export default Sidebar;