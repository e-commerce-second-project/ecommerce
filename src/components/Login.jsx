import React, { useState } from "react";
import { Button, TextField, Select, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import Footer from "./footer.jsx";

const Login = ({ changeType, log, setEmail, setPassword }) => {
  const [chType, setChType] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div>
      <nav>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '11px', marginBottom: '6px' }}>
          <h1 style={{ position: 'absolute', left: '20px', fontWeight: 'bold', fontSize: 'xl' }}>Exlusive</h1>
          <NavLink to={'/home'} >Home</NavLink>
          <NavLink to={'/contact'}>Contact</NavLink>
          <NavLink to={'/AboutUs'}>AboutUs</NavLink>
          <NavLink to={'/'}>Signup</NavLink>
        </div>
      </nav>
      <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <div style={{ backgroundColor: '#cbe4e8', width: '1440px', height: '1561px', position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '129px', top: '200px' }}>
          <div style={{ width: '500px', height: '500px', backgroundColor: '#cbe4e8', borderRadius: '0px 4px 4px 0px', overflow: 'hidden', position: 'relative' }}>
          <img
              style={{ position: 'absolute', width: '500px', height: '600px', top: '0px', left: '4px' }}
              alt="Dl beatsnoop"
              src="https://i.imgur.com/nxyvDFz.png"
            />
          </div>
          <hr style={{ color: 'gray', width: '1px', height: '100%' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '40px', position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '48px', position: 'relative', fontWeight: 'bold', fontSize: '36px', lineHeight: '1.5', whiteSpace: 'nowrap' }}>
              Log in to Exclusive
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '40px', position: 'relative', fontWeight: 'normal', fontSize: '16px', lineHeight: '1.5', whiteSpace: 'nowrap' }}>
              Enter your details below
            </div>
            <div>
              <TextField type="text" placeholder="Enter your email" className="w-96 h-9" onChange={(event) => { setEmail(event.target.value) }} />
            </div>
            <div>
              <TextField type="password" placeholder="Enter your password" className="w-96 h-9" onChange={(event) => { setPassword(event.target.value) }} />
            </div>
            <div>
              <Button className="mt-60 bg-red w-32 h-10 border rounded text-white text-sm" onClick={() => setShow(!show)}>Select Type !</Button>
              {show &&
                <Select
                  className="rounded text-black"
                  multiple
                  size="small"
                  value={chType}
                  onChange={(event) => { setChType(event.target.value) }}
                >
                  <MenuItem value="client">Client</MenuItem>
                  <MenuItem value="seller">Seller</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              }
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '87px', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '16px', position: 'relative' }}>
                <Button className="bg-red w-32 h-10 border rounded text-white text-sm" onClick={() => { log(); changeType(chType) }}>Log-In</Button>
              </div>
              <div style={{ position: 'relative', fontWeight: 'normal', fontSize: '16px', lineHeight: '1.5', whiteSpace: 'nowrap' }}>
                Forget Password?
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
