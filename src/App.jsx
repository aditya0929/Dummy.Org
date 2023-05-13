import React, { useEffect } from 'react';
import './App.css';
import Cursor from './components/Cursor/Cursor';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Stacks from './components/Stacks/Stacks';
import Events from './components/Events/Events';
import Archives from './components/Archives/Archives';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollReveal from 'scrollreveal';
import Preloader from './components/Preloader/Preloader';

const App = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      // reset: true,
    })
    sr.reveal(`.home-container, .home-desc, .about-content, .project-desc, .projects-more-wrapper, .archives-title, .archives-desc, .contact-desc, .footer-container`)
    sr.reveal(`.home-subtitle, .home-image-container, .line, .about-title, .projects-title, .about-txt-h3, .project-name, .contact-title, .contact-mail`, {delay:500, origin:'bottom'})
    sr.reveal(`.event-box, .project-link-wrapper, .archives-box, .archives-bottom, .contact-social`, {interval: 100})
  }, []);

  return (
    <>
      <Preloader/>
      <Cursor />
      <Navbar />
      <Home />
      <Services />
      <About />
      <Stacks />
      <Events />
      <Archives />
      <Contact />
      <Footer />
    </>
  );
}

export default App
