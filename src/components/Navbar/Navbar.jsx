import React, { useState }from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { IoMdClose } from 'react-icons/io'
import { FaGripLines } from 'react-icons/fa' 

const Navbar = () => {
  //code to add toggle navmenu
  const [active, setActive] = useState('nav-menu')
  //function to toggle navmenu
  const showNav = () => {
    setActive('nav-menu activeMenu')
  }
  //function to remove navmenu
  const removeNav = () => {
    setActive('nav-menu')
  }
  //code to add scrollHeader
  const [scrollHeader, setactiveHeader] = useState('header')
  //function to add background
  const scrollBg = () => {scrollHeader
    if(window.scrollY >= 10){
      setactiveHeader('header scrollHeader')
    }
    else{
      setactiveHeader('header')
    }
  }
  window.addEventListener('scroll', scrollBg)

  return (
    <header className={scrollHeader}>
      
      <nav className="nav container">
        <a href="#home" className="nav-logo">DATA ORG </a>
          <div className={active}>
            <ul onClick={removeNav} className="nav-list">
              <li className="nav-item"><a href="#home" className="nav-link shadow hidden">Home</a></li>
              <li className="nav-item"><a href="#about" className="nav-link shadow">About</a></li>
              <li className="nav-item"><a href="#events" className="nav-link shadow">Events</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link shadow">Contact</a></li>
            </ul>
            <div className="nav-footer">
              <div className="nav-footer-text-1">
                <div>©</div>
                <div>20xx</div>
              </div>
              <div className="nav-footer-text-2"><p>dummy org</p></div>
            </div>
            <div onClick={removeNav} className="nav-close"><IoMdClose className="icon" /></div>
          </div>
          <div onClick={showNav} className="nav-toggle"><FaGripLines className="icon" /></div>
          <a href="#contact" className="home-button button-header">Email Us</a>
      </nav>
      
      <div className="line"></div>
    </header>
  )
}

export default Navbar
