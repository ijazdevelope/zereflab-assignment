import React from 'react'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import './layout.scss'

const Layout = () => {
  return (
    <div className='layout-wrapper'>
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default Layout
