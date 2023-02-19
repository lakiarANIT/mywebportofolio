import React from 'react';
import './services.css';
const Services = () => {
  return (
    <div className="services-main">
        <div className='services-title'>
            <div className="services-title-heading">
                <h1>Services</h1>
            </div>
            <div className="services-title-paragraph">
                <p>I have specialization in the following areas. </p>
            </div>
        </div>
        <div className="services-body">
            <div className="services-body-card">
                <div className="services-body-card-heading">
                    <h2>UI/UX design</h2>
                </div>
                <div className="services-body-card-body">
                    <p>Get the best design. Make your users enjoy your product. Attractive and minimalist design. Modernize your web with new design coming down into the market.</p>
                </div>
                <div className="services-body-card-button">
                    <button type="submit">Find more</button>
                </div>
            </div>


            <div className="services-body-card">
                <div className="services-body-card-heading">
                    <h2>Front end Development</h2>
                </div>
                <div className="services-body-card-body">
                    <p>Make your user interfaces stand out. Use the latest technologies to make your web sites and web apps come alive. Is React,Vue or angular. .</p>
                </div>
                <div className="services-body-card-button">
                    <button type="submit">Find more</button>
                </div>
            </div>

            
            <div className="services-body-card">
                <div className="services-body-card-heading">
                    <h2>Back end Development </h2>
                </div>
                <div className="services-body-card-body">
                    <p>Make your back end technologies compliment your front end. Ask anything any problem and  be given the best tech stack suited. Is it speed.. </p>
                </div>
                <div className="services-body-card-button">
                    <button type="submit">Find more</button>
                </div>
            </div>

            
            <div className="services-body-card">
                <div className="services-body-card-heading">
                    <h2>Android Development</h2>
                </div>
                <div className="services-body-card-body">
                    <p>Make your website run on android apps. With knowledge of UI/UX design your product can be whole round. Java, or react native or Flutter. Build your apps in....</p>
                </div>
                <div className="services-body-card-button">
                    <button type="submit">Find more</button>
                </div>
            </div>
        </div>
        <div className="services-extra-info">
            <p>I am also open to discussion to multiple software related services. I have a strong background in computer science</p>
        </div>
    </div>
  )
}

export default Services