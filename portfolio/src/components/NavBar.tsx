import React from 'react'

const NavBar = () => {
  return (
    <nav>
      <ul className='p-3 flex flex-row gap-5  justify-end' >
        <li className='hover:cursor-pointer hover:text-cyan-400'>Home</li>
        <li className='hover:cursor-pointer hover:text-cyan-400'>Blog</li>
        <li className='hover:cursor-pointer hover:text-cyan-400'>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar