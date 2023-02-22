
import Navbar from './navbar';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Tools from './pages/tools';
import Services from './pages/services';



import {Route, Routes} from "react-router-dom"

import React from 'react';



function App() {

 
  return ( 
   <>
  <Navbar/>  <React.Fragment/>
s

  <div className='container'>
    <Routes>
      <Route path= "/home" element={<Home />}></Route>
      <Route path= "tools" element={<Tools />}></Route>
      <Route path= "/services" element={<Services />}></Route>
      <Route path= "/about" element={<About />}></Route>
  
    </Routes>
  </div>
 
  </>
  
 
  )
}

export default App;
