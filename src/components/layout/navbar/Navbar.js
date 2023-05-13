import React from 'react'
import './navbar.scss'
import Search from '../../../assets/images/search.png';
import Notification from '../../../assets/images/notification.png';
import Avatar from '../../../assets/images/avatar.png';

const Index = ({ openSidebar, setOpenSidebar}) => {
  console.log(openSidebar)
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Registration</a>
        <button className="navbar-toggler" onClick={ () => setOpenSidebar(!openSidebar) } type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a className="nav-link p-0 active" aria-current="page" href="#">
                <img src={Search} alt="navbar-search-icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0" href="#">
                <img src={Notification} alt="navbar-notification-icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0" href="#">
                <img src={Avatar} alt="navbar-avatar-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Index
