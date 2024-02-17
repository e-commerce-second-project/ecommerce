import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/User/Homepage.jsx";
import Cart from "./components/User/Cart.jsx";
import SingleProduct from "./components/User/SingleProduct.jsx";

const App=()=>{
  return(
 <div className="App">
  <Router>
    <Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/oneItem" element={<SingleProduct/>}/>
    </Routes>
  </Router>
 </div>
  )
}
export default App