import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./components/Signup.jsx";
import UserInterface from "./components/userinterface.jsx";
import Searchuserinterface from "./components/searchuserinterface.jsx";
import WishList from "./components/wishlist.jsx";
const App=()=>{
  return(
  <div className="App">
  <Router>
    <Routes>

<Route path="/signup" element={<SignUp/>}/>

    <Route path="/" element={<UserInterface/>}/>
    <Route path="/searchuserinterface/:target" element={<Searchuserinterface/>}/>
    <Route path="/wishlist" element={<WishList/>}/>

    </Routes>
  </Router>
  </div>
  )
}
export default App