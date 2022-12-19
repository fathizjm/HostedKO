import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Home from "../src/pages/Home";
import Profile from "../src/pages/Profile";
import Templates from "../src/pages/templates";
import Templates_public from "../src/pages/templates_public";
import UserProfile from "../src/components/UserProfile";
import User from "../src/components/User";
import React, { useState } from "react";
import Vcard from "../src/pages/Vcard";
import Favicon from "react-favicon";
import logoimg from "./components/logo.png"

function App() {
  return (
    <div className="App">
       <Favicon url={logoimg}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/templates/:id" element={<ProtectedRoute><Templates /></ProtectedRoute>} />
          <Route path="/Vcard" element={<ProtectedRoute><Vcard /></ProtectedRoute>} />
          <Route path="/templates_public/:id" element={<Templates_public />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/UserProfile" element={<UserProfile/>}/>
          <Route path="/:username" element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
 if (localStorage.getItem("sheyresume-user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
