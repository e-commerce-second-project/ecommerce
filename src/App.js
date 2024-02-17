
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Userinterface from "./components/userinterface.jsx";
import AboutUs from "./components/AboutUs.jsx"
import axios from "axios";


const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const log = () => {
    axios.post("http://127.0.0.1:3300/login", { email: email, password: password })
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };
//     const changeType=(type)=>{
//     if(type==='seller'){
//       navigate('/seller')
//     }
//     else if (type==='admin'){
//       navigate('/admin')
//     }
//     else if (type==='client'){
//       navigate('/home')
//     }
// }
// const x=()=>{
//   navigate('/Signup');
// }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Login' element={<Login  setEmail={setEmail} setPassword={setPassword} log={log} />} />
          <Route path="/" element={<Signup />} />
          <Route path="/userinterface" element={<Userinterface/>} />
          <Route path='/AboutUs' element={<AboutUs/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
