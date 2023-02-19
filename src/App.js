import React from 'react';
import { Navbar,Home,About,Services } from './components/index';
import './App.css';
function App() {
  return (
    <div className='App'>
        <div className='header' id='home'>
            <div className='background-gradient'>
                <Navbar/>
                <Home/>
            </div>
        </div>
        <div className='aboutme' id='about'>
          <About/>
        </div>
        <div className='services' id='services'>
          <Services/>
        </div>
    </div>
  )
}

export default App