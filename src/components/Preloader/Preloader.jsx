// import React from 'react'
import React, { useEffect } from 'react';
import './preloader.css'
// import './navbar.css'

const Preloader = () => {

    useEffect(() => {
        const preloader = document.querySelector("[data-preloader]");
        preloader.classList.add("loaded");
        document.body.classList.add("loaded");
    }, []);

  return (
    <div className="preloader" data-preloader>
        <span className="preloader-line"></span>
    </div>
  )
}

export default Preloader