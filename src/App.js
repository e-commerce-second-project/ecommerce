import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./components/sign-up.jsx";


const App=()=>{
  return(
 <div className="App">
  <Router>
    <Routes>
<Route path="/" element={<SignUp/>}/>
    </Routes>
  </Router>
 </div>
  )
}
export default App