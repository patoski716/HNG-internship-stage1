import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App