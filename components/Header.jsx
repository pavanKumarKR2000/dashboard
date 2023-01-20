import React from 'react'

const Header = ({title}) => {
  return (
    <header className='flex justify-between items-center p-4'>
       <h1 className='text-xl fobt-bold'>{title}</h1>
       <p className='text-lg'>welcome back , Pavan</p>
    </header>
  )
}

export default Header;