import { useState } from "react";

import "./App.css";
import "./index";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import Note from "./pages/Note";
import About from "./pages/About";
import AdminPanel from "./pages/AdminPanel";
import PasswordManager from "./pages/PasswordManager";
import TodoList from "./pages/TodoList";
import AddPractical from "./pages/AddPractical";
import Study from "./pages/Study";
import AllPracticals from "./components/AllPracticals";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/addpractical" element={<AddPractical />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/project" element={<Project />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/note" element={<Note />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/passwordapp" element={<PasswordManager />} />
          <Route path="/study" element={<Study/>} />
          <Route path="/javaPracticals" element={<AllPracticals />} />
          {/* <Route path="/practical_1" element={<Practical />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
