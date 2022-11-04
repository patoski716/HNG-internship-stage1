import React from 'react'
import Footer from './Footer'


const Contact = () => {
  const name = "patoski"
  return (
    <div className="container">
      <section id="register" className=" mt-5 py-5 mb-5 pb-5">
        
          <div className="row">
            <div className="col-md-6 mx-auto">
            <p style={{fontWeight:'bold',fontSize:'26px'}}>Contact Me</p>
            <p>Hi there, contact me to ask me about anything you have in your mind. </p>
            <form>
              <div className="row">
                <div className="col-md-6">
                <label htmlFor="firstname" style={{fontWeight:'bold'}}>First Name</label>
                <input type="text" id='first_name' className="form-control" placeholder="Enter your first name" required="required" />
                </div>
                <div className="col-md-6">
                <label htmlFor="lastname" style={{fontWeight:'bold'}}>Last Name</label>
                <input type="text" id='last_name' className="form-control" placeholder="Enter your last name" required="required" />
                </div>
                <div className="col-md-12">
                <label htmlFor="email" style={{fontWeight:'bold'}}>Email</label>
                <input type="email" id='email' className="form-control" placeholder="yourname@email.com" required="required"/>

                <label htmlFor="message" id='message' style={{fontWeight:'bold'}}>Message</label>
                <textarea className="form-control" rows="5" placeholder="send me a message and i'll reply you as soon as possible" required="required"/>
                
                <input type="checkbox" className='mt-3 mx-2'/> You agree to providing your data to {name} who may contact you  
                </div>
                <div className="col-md-12">
                <button id='btn__submit' className="btn btn-primary mt-4" style={{height:'40px',width:'100%',textDecoration:'none',color:'white',border:'#EAECF0',justifyContent:'center'}}>Send message</button>
                </div>
              </div>

            </form>

            </div>
          </div>
      </section>
      <Footer/>

    </div>

  )
}

export default Contact