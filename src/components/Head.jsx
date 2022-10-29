import React from 'react'
import Send from '../images/send.svg'
import Profile from '../images/profile__img.png'



const Head = () => {
  return (
    <div className="mt-5">
        <div className="row">
            <div className="col-md-4"></div>
            
            <div className="col-md-4">
                <div className="circle-image mt-4 mx-5 px-4 port2" id="profile__img">
                <img src={Profile} className="image" alt="send" width="100" height="100"/>
                
                </div> 

                <div className="boxes">
                <div className="dot">
                  </div>  
                </div>            
                
                <div className="text-black text-center">
                <p style={{fontWeight:'bolder'}}>ADEYEMO FORTUNATUS</p>
                <p id="slack" hidden> patoski</p>
                </div>
            </div>
            <div className="col-md-4 rounded-circle send point">
              <div className="box mx-auto text-center">
                <img src={Send} alt="send"  className='mt-1'/>
              </div>
            </div>

            
        </div>
    </div>
  )
}

export default Head