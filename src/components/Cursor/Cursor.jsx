import React from 'react'
import './cursor.css'

const Cursor = () => {

  const cursorRef = React.useRef(null);

  //adding event listener
  React.useEffect( () => {
    document.addEventListener('mousemove', (event) => {
      const {clientX, clientY} = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      // cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
  }, []);

  return <div className="custom-cursor" ref={cursorRef} />
  
}

export default Cursor