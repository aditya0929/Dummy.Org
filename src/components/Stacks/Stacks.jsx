import React from 'react'
import './stacks.css'
import Marquee from 'react-fast-marquee'

const Stacks = () => {
  return (
    <section className="services section">
      <div className="services-container">
        <Marquee gradient={false} speed={60} pauseOnHover>
          <h1 className="welcome-text">👩🏽‍💻</h1>
          <h1 className="welcome-text">datalize!</h1>
          <h1 className="welcome-text">👩🏽‍💻</h1>
          <h1 className="welcome-text">our new upcoming event </h1>
          <h1 className="welcome-text">👩🏽‍💻</h1>
          <h1 className="welcome-text">registration will start from april/2023</h1>


        </Marquee>
      </div>
    </section>
  )
}

export default Stacks