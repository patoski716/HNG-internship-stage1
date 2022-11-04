import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const Error = () => {
    const navigate=useNavigate()
    useEffect(() => {
        setTimeout(() => {
          navigate('/')
        }, 3000)
      }, [])
  return (
    <div className='container'>
        
        <section className=" mt-5 py-5 mb-5 pb-5">
            <div className="row">
                <div className="col-md-12 mx-auto">
                <p className='text-primary'>404 error</p>
                <h1 style={{fontWeight:'bolder',fontSize:'2rem',color:'black'}}>We can't find that page</h1>
                <p>Sorry, the page you are looking for doesn't exist</p>
                </div>
                <div className="">
                    <a href="/"  className="btn btn-white mx-2" id="buttom">&#8592;Go back</a>
                    <a href="/" className="btn btn-primary" id="top">Take me home</a>
                </div>
                

            </div>
        </section>

    </div>
  )
}

export default Error