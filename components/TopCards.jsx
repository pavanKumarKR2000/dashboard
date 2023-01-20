import React from 'react'

const TopCards = () => {
  return (
   <div className='grid grid-cols-1 gap-4 p-4 lg:grid-cols-5'>
          <div className='flex items-center justify-between w-full col-span-1 p-4 bg-white border rounded-md lg:col-span-2'>
              <div className='flex flex-col justify-center w-full'>
                 <p className='text-2xl font-bold'>$7,846</p>
                 <p className='text-gray-600'>Daily Revenue</p>    
              </div>
              <p className='flex items-center p-2 bg-green-200 rounded-md jusdtify-center'>
                  <span className='text-lg text-green-700'>+17%</span>
              </p>
          </div>
          <div className='flex items-center justify-between w-full col-span-1 p-4 bg-white border rounded-md lg:col-span-2'>
          <div className='flex flex-col justify-center w-full'>
                 <p className='text-2xl font-bold'>$4,23,452</p>
                 <p className='text-gray-600'>YTD Revenue</p>    
              </div>
              <p className='flex items-center p-2 bg-green-200 rounded-md jusdtify-center'>
                  <span className='text-lg text-green-700'>+11%</span>
              </p>
          </div>
          <div className='flex items-center justify-between w-full col-span-1 p-4 bg-white border rounded-md lg:col-span-1'>
          <div className='flex flex-col justify-center w-full'>
                 <p className='text-2xl font-bold'>14,140</p>
                 <p className='text-gray-600'>Customers</p>    
              </div>
              <p className='flex items-center p-2 bg-green-200 rounded-md jusdtify-center'>
                  <span className='text-lg text-green-700'>+8%</span>
              </p>
          </div>
   </div>
  )
}

export default TopCards;