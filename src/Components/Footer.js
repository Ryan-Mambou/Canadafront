import React from 'react';
import { FaTwitter, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import '../styles/footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_top'>
        <ul className='footer_links'>
            <li className='footer_link'>CONTACT</li>
            <li className='footer_link'>ABOUT US</li>
            <li className='footer_link'>FAQs</li>
        </ul>
        <div className='footer_icons'>
            <FaFacebook className='footer_icon'/>
            <FaTwitter className='footer_icon'/>
            <FaInstagramSquare className='footer_icon'/>
        </div>
        </div>
        <span id='copyright'>Copyright © 2022</span>
    </div>
  )
}

export default Footer;