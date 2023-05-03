import React from 'react'
import './events.css'
import { eventsData } from '../Constants/Constants'
import {AiOutlineGithub} from 'react-icons/ai'
import {BiLink} from 'react-icons/bi'

const Events = () => {
  return (
    <section className="events section" id="events">
      <div className="events-title-wrapper container">
        <h1 className="events-title">Featured Events</h1>
      </div>
      <div className="events-container container grid">
        { eventsData.map (({ id, image, title, desc, apply }) => {
          return(
            <div key={id} className="event-box">
              <img src={image} alt={title} className="event-img" />
              <div className="event-content">
                <h3 className="event-name">{title}</h3>
                <p className="event-desc">{desc}</p>
                <div className="event-link-wrapper">
                  <a href={apply} target="_blank" className="event-link event-link-one">Apply <BiLink className="event-icon" /></a>
                
                </div>
              </div>
            </div>
          )})
        }
      </div>
      <div className="events-more-wrapper">
        <a href="#archives" className="button events-button">See our work </a>
      </div>
    </section>
  )
}
const eventsContainer = document.querySelector('.events-container');
const eventBoxes = document.querySelectorAll('.event-box');

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.8; // Trigger animation when element is 80% in view
  eventBoxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkScroll);

export default Events
