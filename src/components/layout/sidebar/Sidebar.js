import React from 'react'
import './sidebar.scss'
import SidebarTitle from '../../../assets/images/Group 47557.png'
import HorizontalLine from '../../../assets/images/Vector 29.png'
import Dashbord from '../../../assets/images/dashbord.png'
import Contact from '../../../assets/images/contact.png'
import About from '../../../assets/images/about.png'
import Setting from '../../../assets/images/settings.png'
import Logout from '../../../assets/images/logout.png'
import { Link } from 'react-router-dom'

const Index = ({openSidebar}) => {
  return (
    <aside className={`${openSidebar ? 'close' : 'open'}`}>
      <div className='title'>
        <img src={SidebarTitle} alt='sidebar-icon' />
        <img src={HorizontalLine} alt='sidebebar-line' className='horizontal-line' />
      </div>
      <section>
        <div className='content-top'>
          <ul>
            <li>
              <Link to='/dashboard'>
                <img src={Dashbord} alt="sidebar icon" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <img src={Contact} alt="sidebar icon" />
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link to='/about'>
                <img src={About} alt="sidebar icon" />
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className='content-top content-bottom'>
          <ul className='m-0'>
            <img src={HorizontalLine} className='horizontal-line2' alt="sidebar border" />
            <li>
              <img src={Setting} alt="sidebar icon" />
              <span>Setting</span>
            </li>
            <li>
              <img src={Logout} alt="sidebar icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  )
}

export default Index
