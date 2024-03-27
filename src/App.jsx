import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/logout" element={<Logout/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
