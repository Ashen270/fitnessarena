import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"

/**
 * Renders a section with reasons to choose a certain product or service.
 * @returns {JSX.Element} The rendered section.
 */
const Reasons = () => {
  return (
    <div className="Reasons" id="Why us">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>

        <div className='details-r'>
          <div>
            <img src={tick} alt="" />
            <span>over 150+ expert coaches</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Train smater and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
          <span
            style={{
                color: "var(--gray)",
                fontWeight: "normal",
            }}
          > OUR PARTNERS
          </span>
          <div className='partners'> 
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
          </div>
      </div>
    </div>
  );
};

export default Reasons