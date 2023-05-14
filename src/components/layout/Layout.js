import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import './layout.scss'
import Register from '../../pages/register/Register'


const Layout = ({ children, title }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const closeSidebar = () => {
    setOpenSidebar(false);
  }

  return (
    <div className='layout-wrapper'>
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} title={title} />
      <Sidebar openSidebar={openSidebar} closeSidebar={closeSidebar} />
      <div className='content-container'>
        {children}
      </div>
    </div>
  )
}

export default Layout
