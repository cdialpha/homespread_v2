import React from 'react';
import './styles/App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from './pages/Register';  
import Navbar from './components/Navbar';
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
    </Routes>
    </>
  );
}

export default App;
