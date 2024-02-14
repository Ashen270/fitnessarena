import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <div className="Hero">
        <div className="left-h">
          <Header/>
{/* the best  ad */}
          <div className="the-best-ad">
            <div></div>
              <span>The Best Fitness Club In Colombo</span>
          </div>
{/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>

          <div>
             <span>Ideal Body</span>
          </div>
          <div> 
          <span>
          We assist you in sculpting and constructing your dream physique, empowering you to lead a fulfilling and vibrant life.
          </span>
          </div>
          
        </div>
        
        {/* Figures */}
        <div className="figures">
          <div>
            <span>+150</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+1000</span>
            <span>Member Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div>
        </div>
        {/* Hero Buttons */}
          <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
          </div>

        <div className="right-h">Right</div>


    </div>

  )
}

export default Hero