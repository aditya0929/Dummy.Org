import React from 'react'
import './archives.css'
import { archivesData } from '../Constants/Constants'
import {AiOutlineGithub} from 'react-icons/ai'
import {BiLink} from 'react-icons/bi'

const Archives = () => {
  return (
    <section className="archives section" id="archives">
      <div className="projects-title-wrapper container">
        <h1 className="projects-title"> 
     Archives</h1>
      </div>
      
      <div className="archives-container container">
        { archivesData.map (({ id, title, desc, live, code }) => {
          return(
            <div key={id} className="archives-box">
                <h3 className="archives-title">{title}</h3>
                <p className="archives-desc">{desc}</p>
                <div className="archives-bottom">
                   
                    <a href={code} target="_blank" className="project-link project-link-two archives-link">View code <AiOutlineGithub className="project-icon" /></a>
                </div>
            </div>
          )})
        }
      </div>
      
    </section>
  )
}

export default Archives