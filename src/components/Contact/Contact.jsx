import React from 'react'
import './contact.css'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai' 
import {AiOutlineEnvironment} from 'react-icons/ai' 

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container-container container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-desc">come participate in our events and win prizes and be an active member of our community</p>

        <div className="contact-mail">
          <a href="mailto:adityajha8906@gmail.com" target="_blank" className="contact-link">adityajha8906@gmail.com</a>
        </div>

        <div className="contact-social">
          
          <a href="https://www.instagram.com" target="_blank" className="container-link-bottom">
            <p className="contact_p">Instagram</p><AiOutlineInstagram className="contact-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" className="container-link-bottom">
            <p className="contact_p">Linkedin</p><AiFillLinkedin className="contact-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" className="container-link-bottom">
            <p className="contact_p">Youtube</p><AiOutlineYoutube className="contact-icon" />
          </a>
          <a href="https://github.com/aditya0929" target="_blank" className="container-link-bottom">
            <p className="contact_p">Github</p><AiOutlineGithub className="contact-icon" />
          </a>
           
        </div>

      </div>
    </section>
  )
}

export default Contact
