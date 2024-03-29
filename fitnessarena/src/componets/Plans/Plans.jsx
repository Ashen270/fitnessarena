import React from 'react'
import './plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
   <div className="plans-container" id='Plans'>
            <div className="blur plans-blur1"></div>
            <div className="blur plans-blur2"></div>
          
         <div className="programs-header" style={{
            gap: '2rem'
         }}>
            <span className='stroke-text'>Ready to start</span>
            <span>Your Journey</span>
            <span className='stroke-text'>Now With Us</span>
         </div>

         {/* Plans Card */}
         <div className="plans" id='plans'>
            {plansData.map((plan, i)=> (
                <div className="plan" key={1}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                  <div className="features">
                    {plan.features.map((feature, i)=>(
                        <div className="feature">
                            <img src={whiteTick} alt='' />
                            <span key={i}>{feature}</span>
                        </div>

                    ))}
                    </div>  
                  <div>
                    <span>See More Benefits</span>
                  </div>
                  <button className='btn'>Join Now</button>
                
                </div>

            ))}
         </div>

   </div>
  )
}

export default Plans