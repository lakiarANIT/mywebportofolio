import React from 'react'
import './home.css'
function home() {
  return (
    <div className='home'>
      <div className='header-content'>
        <div className='header-content-description'>
          <p>
            Hi
          </p>
          <h1>
          I'm Fullstack Developer
          </h1>
          <p>
          I am a UX /UI designer and Fullstack developer. I build 
          creative web pages and web apps. My joy is making magic in the net works. I love sharing what I learn everyday. 
          </p>
          <button type="submit">Contact Me</button>
        </div>
        <div className="header-content-img">
          <img src="assets\backgroundimage.png" alt="imagea" />
        </div>
        
      </div>



    </div>
  )
}

export default home