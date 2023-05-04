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
          <a href="mailto:dsc.vitb@vitbhopal.ac.in" target="_blank" className="contact-link">dsc.vitb@vitbhopal.ac.in</a>
        </div>

        <div className="contact-social">
          
          <a href="https://www.instagram.com/dscvitbhopal/" target="_blank" className="container-link-bottom">
            <p className="contact_p">Instagram</p><AiOutlineInstagram className="contact-icon" />
          </a>
          <a href="https://www.linkedin.com/in/data-science-club-vit-bhopal-5b9b02232/?originalSubdomain=in" target="_blank" className="container-link-bottom">
            <p className="contact_p">Linkedin</p><AiFillLinkedin className="contact-icon" />
          </a>
          <a href="https://www.youtube.com/channel/UC5pB8eW_kDoimQ5s4S7QgeA" target="_blank" className="container-link-bottom">
            <p className="contact_p">Youtube</p><AiOutlineYoutube className="contact-icon" />
          </a>
          <a href="https://github.com/cdsvitbhopal" target="_blank" className="container-link-bottom">
            <p className="contact_p">Github</p><AiOutlineGithub className="contact-icon" />
          </a>
           
        </div>

      </div>
    </section>
  )
}

export default Contact
