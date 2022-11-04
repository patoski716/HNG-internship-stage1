import React from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Error = () => {
    const navigate=useNavigate()
    useEffect(() => {
        setTimeout(() => {
          navigate('/')
        }, 5000)
      }, [])
  return (
    <div className='container'>
        
        <section className=" mt-5 py-5 mb-5 pb-5">
            <div className="row">
                <div className="col-md-12 mx-auto">
                <p className='text-primary'>404 error</p>
                <h1 style={{fontWeight:'bolder',fontSize:'2rem',color:'black'}}>We can't find that page</h1>
                
                <p className='bigscreen'>Sorry, the page you are looking for doesn't exist</p>
                <p className='smallscreen'>Sorry, the page you are looking for doesn't exist or has been moved.</p>
                </div>
                <div className="bigscreen">
                    <Link to="/"  className="btn btn-white mx-2" >&#8592;Go back</Link>
                    <Link to="/" className="btn btn-primary text-white" >Take me home</Link>
                </div>

                <div className="smallscreen">
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/" className="btn btn-primary" style={{height:'50px',width:'100%',textDecoration:'none',color:'white',justifyContent:'center'}}>Take me home</Link>    
                        </div>
                        <div className="col-md-6">
                            <Link to="/"  className="btn btn-white mx-2" style={{height:'50px',width:'100%',textDecoration:'none',color:'black',justifyContent:'center'}}>&#8592; Go back</Link>
                        </div>
                    </div>
                </div>
                

            </div>
        </section>

    </div>
  )
}

export default Error