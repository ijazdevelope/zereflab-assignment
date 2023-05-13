import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import './layout.scss'
import Register from '../pages/register/Register'

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className='layout-wrapper'>
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Sidebar openSidebar={openSidebar} />
      <Register />
    </div>
  )
}

export default Layout
