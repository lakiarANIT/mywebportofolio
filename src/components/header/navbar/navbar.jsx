import React from 'react';
import './navbar.css';
function navbar() {
  return (
    <div className='navbar'>
        
        <div className='navbar-links-container'>
            
            <div className="navbar-links-items">
            <div className='navbar-logo'>
                <p>Langat</p>
            </div>
                <p> <a href='#home'>Home</a></p>
                <p> <a href='#about'>About Me</a></p>
                <p> <a href='#resume'>Resume</a></p>
                <p> <a href='#portfolio'>Portfolio</a></p>
                <p> <a href='#service'>Services</a></p>
                <p> <a href='#Contact'>Contact Me</a></p>
            </div>
            

        </div>
    </div>
  )
}

export default navbar