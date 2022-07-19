import React, {createContext, useState, useEffect} from 'react';
import './styles/App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from './pages/Register';  
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Mission from './pages/Mission';
import Chefs from './pages/Chefs';
import Brick from './pages/Brick';

export const UserContext = createContext(null)

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <>
    <UserContext.Provider value={isLoggedIn}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
      <Route path="/mission" element={<Mission/>} />
      <Route path="/chefs" element={<Chefs/>} />
      <Route path="/brick" element={<Brick/>} />
    </Routes>
    <Footer/>
    </UserContext.Provider>
    </>
  );
}

export default App;
