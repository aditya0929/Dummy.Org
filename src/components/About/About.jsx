import React from 'react'
import './about.css'
import { AiOutlineDownload } from 'react-icons/ai'
import form from '../../assets/application_form.pdf'

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about-container container">
          <div className="about-content">
            <h1 className="about-title">More about Us</h1>
            <p className="about-desc">Welcome to Dummy.Org, your trusted partner in organizing exceptional educational events. We are a passionate team dedicated to empowering individuals through immersive and transformative learning experiences. With our unwavering commitment to educational excellence, we strive to create a platform where knowledge meets inspiration.</p>
            <p className="about-desc">As a member of our teams, we understand the importance of fostering a lifelong love for learning. That is why we curate dynamic and engaging events that cater to a wide range of educational interests, from seminars and workshops to conferences and symposiums.</p>
            <p className="about-desc about-desc-mb">Joining our organsization is a great way to enhance your skills, connect with peers who share your interests, and make a positive impact in the community. We look forward to welcoming you to our club and helping you achieve your data science goals!</p>
            <a href={form} target="_blank" rel="noopener noreferrer">
                <button className="button about-button">Application form<AiOutlineDownload className="download-icon" /></button>
            </a>
          </div>
          <div className="about-txt">
            <div className="about-txt-center">
                <h3 className="about-txt-h3">Who we are</h3>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About
