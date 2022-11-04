import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact'
import Error from './components/Error'




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="*" element={<Error/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App