import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/User/Homepage.jsx";



const App=()=>{
  return(
 <div className="App">
  <Router>
    <Routes>
<Route path="/" element={<HomePage/>}/>
    </Routes>
  </Router>
 </div>
  )
}
export default App