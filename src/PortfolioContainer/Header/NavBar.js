/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './NavBar.css';
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { Link } from 'react-scroll';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='Navbar'>
      <div id="mySidenav" className={`sidenav ${isOpen === true ? 'active' : ''}`}>
        <a className="closebtn" onClick={toggleSidebar}><IoMdClose /></a>
        <Link to='Home' className='link-btn-slider' onClick={toggleSidebar}>Home</Link>
        <Link to="AboutMe" className='link-btn-slider' onClick={toggleSidebar}>About Me</Link>
        <Link to="Skills" className='link-btn-slider' onClick={toggleSidebar}>Skills</Link>
        <Link to="Experience" className='link-btn-slider' onClick={toggleSidebar}>Experience</Link>
        <Link to="ContactMe" className='link-btn-slider' onClick={toggleSidebar}>Contact Me</Link>
        <Link to="Portfolio" className='link-btn-slider' onClick={toggleSidebar}>Portfolio</Link>
      </div>

      <div className='menu-items'>
        <ul className='menu' data-aos="fade-right">
          <div className='mainDiv'>
            <li><Link to='Home' className='link-btn'>Home</Link></li>
          </div>
          <div className='mainDiv'>
            <li><Link to='AboutMe' className='link-btn'>AboutMe</Link></li>
            <div className='hrRow'></div>
          </div>
          <div className='mainDiv'>
            <li><Link to='Skills' className='link-btn'>Skills</Link></li>
            <div className='hrRow'></div>
          </div>
          <div className='mainDiv'>
            <li><Link to='Experience' className='link-btn'>Experience</Link></li>
            <div className='hrRow'></div>
          </div>
          <div className='mainDiv'>
            <li><Link to='Portfolio' className='link-btn'>Portfolio</Link></li>
            <div className='hrRow'></div>
          </div>
          <div className='mainDiv'>
            <li><Link to='ContactMe' className='link-btn'>Contact Me</Link></li>
            <div className='hrRow'></div>
          </div>
        </ul>
      </div>
      <div className='SocialMedia'>
        <div className='social'>
          <a href='https://www.facebook.com/profile.php?id=100024678033622' className='link-btn'><FaFacebookF /></a>
          <a href='https://www.instagram.com/_smile_iZ_mah_attitude_/' className='link-btn'><FaInstagram /></a>
          <a href='https://wa.me/+916381984080' className='link-btn'><FaWhatsapp /></a>
          <a href='https://github.com/Smiling-Killer' className='link-btn'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/sameer-sameer-9ba454227' className='link-btn'><FaLinkedinIn /></a>
        </div>
        <div className='bar'>
          <FiMenu className='menuicon' onClick={toggleSidebar} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
