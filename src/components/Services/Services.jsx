import React from 'react'
import './services.css'
import Marquee from 'react-fast-marquee'

const Services = () => {
  return (
    <section className="services section">
      <div className="services-container">
        <Marquee gradient={false} speed={60} pauseOnHover>
          <h1 className="welcome-text">🎇</h1>
          <h1 className="welcome-text">DataCamp has started </h1>
          <h1 className="welcome-text">🎇</h1>
          <h1 className="welcome-text">hurry up !</h1>
          <h1 className="welcome-text"> 🎇 
  last date to apply for the event is may/2023</h1>
         
        </Marquee>
      </div>
    </section>  
  )
}

export default Services