import React, { useState } from "react";
import './App.css';
import Signin from "./components/Signin";
import Account from "./components/Account";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {  

  return (
    <div className="auth-context">
      <div className="auth-width">
      <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/account" 
          element={
            <ProtectedRoute>
              <Account />              
            </ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
    </div>  
    </div>
  );
}

export default App;