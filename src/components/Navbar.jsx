import React, { useState } from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import '../layout.css'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { data } from "./Sidebar.jsx"


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => {
    setSidebar((prev) => !prev)
  }
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
            <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {data.map((item, index)=>{
            return (
              <li key={index} className={item.className}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>

  )
}

export default Navbar