import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./footer.jsx";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const add = () => {
    axios.post('http://127.0.0.1:3300/signup', { password: password, email: email, username: name, role: role })
      .then(res => {
        const token = res.data.token;
        Cookies.set('token', token, { expires: 7 });
        console.log('added');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <nav>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '11px', marginBottom: '6px' }}>
          <h1 style={{ position: 'absolute', left: '20px', fontWeight: 'bold', fontSize: 'xl' }}>Exlusive</h1>
          <NavLink to={'/home'}>Home</NavLink>
          <NavLink to={'/contact'}>Contact</NavLink>
          <NavLink to={'/AboutUs'}>AboutUs</NavLink>
          <NavLink to={'/Singup'}>Sign up</NavLink>
        </div>
      </nav>
      <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <div style={{ backgroundColor: '#cbe4e8', width: '1440px', height: '1561px', position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '129px', top: '45px', left: '67px' }}>
          <div style={{ width: '805px', height: '630px', backgroundColor: '#cbe4e8', borderRadius: '0px 4px 4px 0px', overflow: 'hidden', position: 'relative' }}>
            <img
              style={{ position: 'absolute', width: '805px', height: '600px', top: '0px', left: '4px' }}
              alt="Dl beatsnoop"
              src="https://i.imgur.com/nxyvDFz.png"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '48px', position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '24px', position: 'relative' }}>
              <div style={{ position: 'relative', fontWeight: 'bold', fontSize: '36px', lineHeight: '1.5', whiteSpace: 'nowrap' }}>
                Create an account
              </div>
              <div style={{ position: 'relative', fontWeight: 'normal', fontSize: '16px', lineHeight: '1.5', whiteSpace: 'nowrap' }}>
                Enter your details below
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '40px', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px', position: 'relative' }}>
                  <TextField type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px', position: 'relative' }}>
                  <TextField type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px', position: 'relative' }}>
                  <TextField type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                  <TextField type="text" placeholder="Role" onChange={(e) => { setRole(e.target.value) }} />
                </div>
              </div>
              <Button variant="contained" color="primary" onClick={add} style={{ alignSelf: 'flex-start' }}>Create Account</Button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '32px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', position: 'relative' }}>
                  <div style={{ position: 'relative', fontWeight: 'normal', fontSize: '16px', lineHeight: '1.5', whiteSpace: 'nowrap' }}>
                    Already have an account?
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '4px', position: 'relative' }}>
                    <div onClick={() => navigate('/login')} style={{ cursor: 'pointer', position: 'relative', fontWeight: 'bold', fontSize: '16px', lineHeight: '1.5', whiteSpace: 'nowrap' }}>Log in</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
