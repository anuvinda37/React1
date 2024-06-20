import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                ADMIN
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/requests">
                    <BsFillArchiveFill className='icon'/> Requests
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/teamleads_list">
                    <BsFillGrid3X3GapFill className='icon'/> Add
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/developers_list">
                    <BsPeopleFill className='icon'/> View
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/teamleads_list">
                    <BsFillGrid3X3GapFill className='icon'/> Delete
                </Link>
            </li>
            
            {/* <li className='sidebar-list-item'>
                <Link to="">
                    <BsListCheck className='icon'/> Inventory
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li> */}
        </ul>
    </aside>
  )
}

export default Sidebar