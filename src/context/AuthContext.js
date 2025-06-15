// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [userRole, setUserRole] = useState(() => localStorage.getItem('role'));

  const login = (newToken, role) => {
    setToken(newToken);
    setUserRole(role);
    localStorage.setItem('token', newToken);
    localStorage.setItem('role', role);
  };

  const logout = () => {
    setToken(null);
    setUserRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  return (
    <AuthContext.Provider value={{ token, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
