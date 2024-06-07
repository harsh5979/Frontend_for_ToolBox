import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import "./App.css";
import "./index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// Lazy load components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
// import Documentry from "./pages/Documentry";
const Note = lazy(() => import("./pages/Note"));
const About = lazy(() => import("./pages/About"));
const AdminPanel = lazy(() => import("./pages/AdminPanel"));
const PasswordManager = lazy(() => import("./pages/PasswordManager"));
const TodoList = lazy(() => import("./pages/TodoList"));
const AddPractical = lazy(() => import("./pages/AddPractical"));
const Study = lazy(() => import("./pages/Study"));
const AllPracticals = lazy(() => import("./components/AllPracticals"));
const Documentry = lazy(() => import("./pages/Documentry"));
// import AllPracticals from "./components/AllPracticals";

function App() {
  // if (process.env.NODE_ENV === "production") {
    disableReactDevTools();
  // }

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Study />} />

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
          <Route path="/study" element={<Study />} />
          <Route path="/javaPracticals" element={<AllPracticals />} />
          <Route path="/documentry" element={<Documentry />} />
          {/* <Route path="/practical_1" element={<Practical />} /> */}
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
