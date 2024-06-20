import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Dashboard from '../Dashboard'
import './Admin.css'

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const navigate = useNavigate();

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const handleLogout = () => {
    // Implement the logout logic here (like clearing localStorage, etc.)
    navigate('/login'); // Redirect to login after logout
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      {/* <Dashboard /> */}
    </div>
  )
}

export default Admin
