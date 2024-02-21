import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter';

const Hero = () => {

  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="Hero" id="Home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best  ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}

          ></motion.div>
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
            <span><NumberCounter end={140} start ={100} delays='4' preFix='+'/></span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span><NumberCounter end={1000} start ={700} delays='4' preFix='+'/></span>
            <span>Member Joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start ={20} delays='4' preFix='+'/></span>
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

        <motion.div className="heartrate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span> 110 Bpm</span>
        </motion.div>


        {/* Hero Images */}
        <img src={hero_image} alt="" className='hero-image' />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back} alt="" className='hero-image-back' />

        {/* Calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className='calories'>

          <img src={Calories} alt="" />
          <span>Calories Burned</span>
          <span>225 Kcal</span>

        </motion.div>


      </div>


    </div>

  )
}

export default Hero