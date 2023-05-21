import React from 'react'
import './services.css'
import Marquee from 'react-fast-marquee'

const Services = () => {
  return (
    <section className="services section">
      <div className="services-container">
        <Marquee gradient={false} speed={60} pauseOnHover>
          <h1 className="welcome-text">🎇</h1>
          <h1 className="welcome-text">apply to our events </h1>
          <h1 className="welcome-text">🎇</h1>
          <h1 className="welcome-text">hurry up and earn cash prize !</h1>
          <h1 className="welcome-text"> 🎇 
  last date to apply for the upcoming event is june/2023</h1>
         
        </Marquee>
      </div>
    </section>  
  )
}

export default Services
