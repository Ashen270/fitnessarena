import React from 'react'
import './Join.css'

const Join = () => {
  return (
   
    <div className='Join' id='Join-us'>
         
         <div className="left-j">
         <hr />
           <div>
            <span className='stroke-text'>Ready to</span>
            <span> Level up</span>
          </div>
          <div>
            <span>Your body</span>
            <span className='stroke-text'>With us ?</span>
          </div>
          
          
         </div>
         <div className="right-j">

              <form action='' className='email-conatiner'>
                <input type="email" name="user_email" placeholder='Enter Your Email Address'/>
                <button className='btn btn-j'>Join us</button>
              </form>


         </div>


    </div>


  )
}

export default Join