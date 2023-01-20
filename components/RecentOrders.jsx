import React from 'react'
import {IoBagHandle} from "react-icons/io5";
import { data } from '../data/data';

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 space-y-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-md bg-white overflow-auto'>
      <h1 className='text-center'>Recent Orders</h1>
      <ul className='flex flex-col space-y-4'>
        {
          data.map((order, id) => {
          
            return (
              <li key={id} className="flex items-center p-2 space-x-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'">
                    <div className='p-3 text-purple-800 bg-purple-100 rounded-md'>
                          <IoBagHandle size={20}/>
                    </div>
                    <div>
                      <p className='font-bold text-gray-800'>${order.total}</p>
                      <p className='text-sm text-gray-400'>{order.name.first}</p>
                    </div>
                    <p className='absolute text-sm lg:flex md:hidden right-6'>{order.date}</p>
              </li>
              )
          })  
        }
      </ul>
    </div>
  )
}

export default RecentOrders