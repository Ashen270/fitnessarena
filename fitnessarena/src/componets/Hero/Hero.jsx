import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

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
         {/* Hero Buttons */}
             <div className="hero-button">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>

      </div>
        

        <div className="right-h">

         <button className='btn'>Join Now</button>
         <div className="heartrate">
             <img src={Heart} alt="" />
             <span>Heart Rate</span>
             <span> 110 Bpm</span>
         </div>
         {/* Hero Images */}
          <img src={hero_image} alt="" className='hero-image'/>
          <img src={hero_image_back} alt="" className='hero-image-back'/>

         {/* Calories */}
         <div className='calories'>
          <img src={Calories} alt=""/>
          <span>Calories Burned</span>
          <span>225 Kcal</span>
          
          </div>
          

        </div>


    </div>

  )
}

export default Hero