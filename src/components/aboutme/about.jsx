import React from 'react';
import backgroundimg from '../../assets/picsection-aboutme.png';
import './about.css';

//import { FaFacebook, } from "react-icons/fa";
const About = () => {
  return (
    <div>
    <div className="aboutme-title">
      <h1>About <span>me</span></h1>
      <div>
        <hr />
      </div>
      </div>
      <div className="aboutme-content">
        <div className="aboutme-content-pic-section">
          <div className="aboutme-content-pic-section-pic">
            <img src={backgroundimg} alt="aboutme" srcset="" />
          </div>
          <div className="aboutme-content-socialmedia">
            <p><a href="#">F</a></p>
            <p><a href="#">T</a></p>
            <p><a href="#">L</a></p>
            <p><a href="#">T</a></p>
            <p><a href="#">F</a></p>
          </div>
        </div>
        <div className="aboutme-section-description">
          <p>
          I am a highly skilled full-stack developer who has a 
          passion for designing and a love for coaching. I grew up with a 
          strong interest in the web and have since then honed my skills in 
          developing and designing for the web. My love for solving problems 
          using programming has turned my work into a fun and enjoyable game.
          </p>
          <div className="aboutme-description-contacts">
            <div className="aboutme-contact-column">
              <div className="aboutme-desc-card">
                <h2>Name</h2>
                <p>Aron Kipngeno Langat</p>
              </div>
              <div className="aboutme-desc-card">
                <h2>Age</h2>
                <p>24 years</p>
              </div>
            </div>
            <div className="aboutme-contact-column">
              <div className="aboutme-desc-card">
                <h2>Phone No.</h2>
                <p>+254727294794</p>
              </div>
              <div className="aboutme-desc-card">
                <h2>Email</h2>
                <p>Kipngenolangat36@gmail.com</p>
              </div>
            </div>
            <div className="aboutme-contact-column">
            <div className="aboutme-desc-card">
              <h2>Job</h2>
              <p>Web Developer</p>
            </div>
            <div className="aboutme-desc-card">
              <h2>Adress</h2>
              <p>Kericho 88-20200</p>
            </div>
            </div>
            
            
          </div>
          <button type="submit">Download CV</button>
        </div>
      </div>
      </div>
  )
}

export default About