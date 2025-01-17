import React from 'react'
import "./Navbar.css"
import todoIcon from "../../assets/images/icon-todo.svg";
import remainderIcon from "../../assets/images/icon-reminders.svg";
import calenderIcon from "../../assets/images/icon-calendar.svg";
import planningIcon from "../../assets/images/icon-planning.svg";
import closeMenu from "../../assets/images/icon-close-menu.svg"
import { useState } from 'react';
import OpenMenu  from "../../assets/images/icon-menu.svg";
const Navbar = () => {
  const[hideSelect,setHideSelect] = useState(false);
  const[openMenu,setOpenMenu] = useState(false);
  const hide =  ()=>{
    hideSelect ? setHideSelect(false) : setHideSelect(true);
}
const OpenCloseMenu =()=>{
  setOpenMenu(!openMenu);
}
  return (
    <>
    <header>
        <nav className="">
        <p className=''>Snap</p>
        <img className="menu-icon" src={openMenu ? closeMenu : OpenMenu } alt={openMenu ? "Close Menu Icon" : "Open Menu Icon"} onClick={OpenCloseMenu} />
        <div className={`overlay ${openMenu ? "show-overlay" : ""}`}></div>
        <ul className={openMenu ? "active-icon" : "hides"}>
        
          <div className='start'>
            <li className='dropdown'>
                <button className='dropdown-button' onClick={hide}>Features</button>
              <div className={`dropdown-content ${hideSelect ? "" : "hide"} `}>
              <div className="dropdown-item">
                    <img src={todoIcon} alt="todo list" />
                    <span>Todo List</span>
                  </div>
                  <div className="dropdown-item">
                    <img src={calenderIcon} alt="calendar" />
                    <span>Calendar</span>
                  </div>
                  <div className="dropdown-item">
                    <img src={remainderIcon} alt="reminders" />
                    <span>Reminders</span>
                  </div>
                  <div className="dropdown-item">
                    <img src={planningIcon} alt="planning" />
                    <span>Planning</span>
                  </div>
              </div>
            </li>
            <li>
                <select name="company" id="company">
                 <option value="default" selected hidden>Company</option>
                 <option value="History">History</option>
                 <option value="Our Team">Our Team</option>
                 <option value="Blog">Blog</option>
                </select>
            </li>
            <li className=''>Careers</li>
            <li className=''>About</li>
            </div>
            <div className='end'>
            <li className='login'>Login</li>
            <li className='button'>Regiter</li>
            </div>
        </ul>
        {/* // <img className='open-menu' src={OpenMenu} alt="click to open navbar" onClick={Menu} /> */}
        </nav>
    </header>
    </>
  )
}

export default Navbar
