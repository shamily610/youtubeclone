import React, { useState } from 'react'
import NavBar from './components/navbar/navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Video from './video/Video';
import Home from './pages/home/Home.jsx';





const App = () => {
  const [sidebar,setSidebar]=useState(true);
  return (
    <div>
      <NavBar setSidebar={setSidebar}/>
  
    <BrowserRouter>
    
    <Routes>
      
      <Route path='/' element={<Home sidebar={sidebar}/>}/>
      <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
    </Routes>
    </BrowserRouter>
      

      
       
        


      
    </div>
  )
}

export default App
