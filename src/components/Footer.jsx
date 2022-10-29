import React from 'react'
import Zuri from '../images/zuri-internship-img.svg'
import Download from '../images/download.png'


const Footer = () => {
  return (
    <div className='mt-2'>
        <hr />
       <div className="row footer">
        <div className="col-md-4">
        <img src={Zuri} alt="zuri"/>
        </div>
        <div className="col-md-4 mt-5">
        HNG Internship 9 frontend Task
        </div>
        <div className="col-md-4 mt-5">
        <img src={Download} alt="ingressive food" style={{height:'30px'}}/>
        </div>
       </div>

    </div>
  )
}

export default Footer