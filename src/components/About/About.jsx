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
            <p className="about-desc">Our club is open to all students who are interested in data science, regardless of their major or level of experience. We provide opportunities for members to learn about data science concepts and tools, participate in data-driven projects, and connect with other students who share their passion for data.</p>
            <p className="about-desc">As a member of our club, you can expect to attend workshops and seminars on topics such as data visualization, machine learning, and data ethics. We also offer opportunities for members to work on data science projects and compete in data science competitions.</p>
            <p className="about-desc about-desc-mb">Joining our data science club is a great way to enhance your skills, connect with peers who share your interests, and make a positive impact in the community. We look forward to welcoming you to our club and helping you achieve your data science goals!</p>
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