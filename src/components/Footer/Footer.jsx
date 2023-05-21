import React from 'react'
import './footer.css'
import { BsArrowUp } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
          <p className="copyright">created by <a href="https://github.com/aditya0929/dsc-task2-website" target="_blank" className="copyright_name">Aditya</a></p>
          <a href="#home" className="back-top-btn">
            <span className="footer_span">Back To Top</span>
            <BsArrowUp />
          </a>
      </div>
    </footer>
  )
}

export default Footer
