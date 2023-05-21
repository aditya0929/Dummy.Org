import React from 'react'
import './home.css'
import MB from '../../assets/MB1.png'

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <p className="home-subtitle">HELLO THERE, WELCOME TO THE </p>
        <div className="home-image-container">
          <img src={MB} alt="logo" className="home-image" />
        </div>
        <p className="home-desc">
          xyz city, India{' '}
          
        </p>
      </div>
      <div className="line"></div>
    </section>
  )
}

export default Home
