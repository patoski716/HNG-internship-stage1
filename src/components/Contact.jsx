import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from './Footer'


const Contact = () => {
  const name = "patoski"
  const [errorFirstname, setErrorFirstname] = useState('');
  const [errorLastname, setErrorLastname] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()

  const [post, setFormDoc] = useState(null)
    
    let handleSubmit = async (e) => {
        e.preventDefault()

        

        console.log('Submit data triggerd...')      

        let postFirstName = post?.first_name
        let postLastName = post?.last_name
        let postEmail = post?.email
        let postMessage = post?.message

        
    
        if(postFirstName === '' || postFirstName === undefined ){
          postFirstName = String(postFirstName).trim()
          
          setErrorFirstname('Plese enter your fist name.');
          return 
        }
        if(postLastName === '' || postLastName === undefined ){
          postLastName = String(postLastName).trim()
          setErrorLastname('Plese enter your last name.');
          return 
        }
        
        if( postEmail === '' || postEmail === undefined ){
            postEmail = String(postEmail).trim()
            setErrorEmail('Plese enter your email.');
            return
        }
        if( postMessage === '' || postMessage === undefined ){
          postMessage = String(postMessage).trim()
          setErrorMessage('Plese enter a message.');
          return
      }
        
      alert('Thank you for contacting me i will get back to you shortly')
      navigate('/');
    }

  return (
    <div className="container">
      <section className=" mt-3 py-5 mb-5 pb-5">
        
          <div className="row">
            <div className="col-md-6 mx-auto">
            <p className="text-black" style={{fontWeight:'bold',fontSize:'3rem'}}>Contact Me</p>
            <p>Hi there, contact me to ask me about anything you have in your mind. </p>
            <form className="mt-5">
              <div className="row">
                <div className="col-md-6 mb-4">
                <label htmlFor="firstname" className="font-weight-bold ">First name</label>
                <input type="text" id='first_name' className="form-control rounded" placeholder="Enter your first name" required="required" value={post?.first_name} onChange={(e) => { setFormDoc({ ...post, 'first_name': e.target.value}) }} />
                {errorFirstname && (
                  <p className="text-danger"> {errorFirstname} </p>
                )}
                </div>
                <div className="col-md-6 mb-4">
                <label htmlFor="lastname" className="font-weight-bold">Last name</label>
                <input type="text" id="last_name" className="form-control rounded" placeholder="Enter your last name" required="required" value={post?.last_name} onChange={(e) => { setFormDoc({ ...post, 'last_name': e.target.value}) }} />
                {errorLastname && (
                  <p className="text-danger"> {errorLastname} </p>
                )}
                </div>
                <div className="col-md-12 mb-4">
                <label htmlFor="email" className="font-weight-bold">Email</label>
                <input type="email" id="email" className="form-control rounded mb-4" placeholder="yourname@email.com" required="required" value={post?.email} onChange={(e) => { setFormDoc({ ...post, 'email': e.target.value}) }}/>
                {errorEmail && (
                  <p className="text-danger"> {errorEmail} </p>
                )}

                <label htmlFor="message"  className="font-weight-bold">Message</label>
                <textarea  className="form-control rounded mb-4" rows="5"id="message" placeholder="send me a message and i'll reply you as soon as possible" required="required" value={post?.message} onChange={(e) => { setFormDoc({ ...post, 'message': e.target.value}) }}/>
                {errorMessage && (
                  <p className="text-danger"> {errorMessage} </p>
                )}
                
                <input type="checkbox" className="mt-3 mx-2 rounded"/> You agree to providing your data to {name} who may contact you  
                </div>
                <div className="col-md-12">
                <button id="btn__submit" onClick={handleSubmit} className="btn btn-primary mt-4 rounded" style={{height:'40px',width:'100%',textDecoration:'none',color:'white',border:'#EAECF0',justifyContent:'center'}}>Send message</button>
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
