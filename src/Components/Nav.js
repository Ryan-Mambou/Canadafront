import React, { useState } from 'react';
import '../styles/nav.css';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLink = () => {
    setShowLinks(!showLinks)
  }

  return (
    <nav className='nav' onClick={toggleLink} id={showLinks ? 'nav' : ''}>
        <NavLink className='navLinks' to='/'>HOME</NavLink>
        <NavLink className='navLinks' to='/study'>STUDY PERMIT</NavLink>
        <NavLink className='navLinks' to='/work'>WORK PERMIT</NavLink>
        <NavLink className='navLinks' to='/immigration'>IMMIGRATION</NavLink>
        <NavLink className='navLinks' to='/arrived'>ARRIVED IN CANADA</NavLink>
        <NavLink className='navLinks' to='/contact'>CONTACT</NavLink>
        <NavLink className='navLinks' to='/about'>ABOUT US</NavLink>
        <HiOutlineMenuAlt2 className='hamburger' onClick={toggleLink}/>
        <AiOutlineCloseCircle className='close' onClick={toggleLink}/>
    </nav>
  )
}

export default Nav