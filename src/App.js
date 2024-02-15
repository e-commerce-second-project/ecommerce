import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignUp from "./components/sign-up.jsx";
import UserInterface from "./components/userinterface.jsx";

const App=()=>{
  return(
 <div className="App">
  <Router>
    <Routes>

<Route path="/" element={<Signup/>}/>

    <Route path="/userinterface" element={<UserInterface/>}/>

    </Routes>
  </Router>
 </div>
  )
}
export default App