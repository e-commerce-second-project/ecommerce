import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

const AuthProvider = ({ Component }) => { 
  const [token, setToken] = useState(Cookies.get('token') || null);

  const setTokenInCookies = (token) => {
    Cookies.set('token', token, { expires: 7 }); 
  };

  const setNewToken = (newToken) => {
    setToken(newToken);
    setTokenInCookies(newToken); 
  };

  const clearToken = () => {
    setToken(null);
    Cookies.remove('token'); 
  };

  useEffect(() => {
    const tokenFromCookies = Cookies.get('token');
    if (tokenFromCookies) {
      setToken(tokenFromCookies);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ setToken: setNewToken, clearToken, token }}>
      {Component} 
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
