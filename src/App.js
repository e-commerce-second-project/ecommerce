import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./components/Signup.jsx";
import UserInterface from "./components/userinterface.jsx";
import Searchuserinterface from "./components/searchuserinterface.jsx";
const App=()=>{
  return(
  <div className="App">
  <Router>
    <Routes>

<Route path="/signup" element={<Signup/>}/>

    <Route path="/" element={<UserInterface/>}/>
    <Route path="/searchuserinterface/:target" element={<Searchuserinterface/>}/>

    </Routes>
  </Router>
  </div>
  )
}
export default App