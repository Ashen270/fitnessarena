import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <div className="Hero">
        <div className="left-h">
          <Header/>

          <div className="the-best-ad">
            <div></div>
            <span>The Best Fitness Club In Colombo</span>
          </div>

        </div>
        <div className="right-h">Right</div>


    </div>

  )
}

export default Hero