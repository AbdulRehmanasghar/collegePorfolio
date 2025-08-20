import { Routes, Route, Link } from "react-router-dom";
import React from 'react';
import Events from "./Pages/Events ";

function App() {

  return (
    
   
     <Routes>
      <Route path='/events' element={<Events />}/>
     

     </Routes>
  )
}

export default App
