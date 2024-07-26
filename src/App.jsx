import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import "./App.css";
import "./index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Mainloader from "./components/Mainloader";
import Protected from "./pages/Protected"
import { useAuth } from "./context/contextapi";

// Lazy load components
const Error = lazy(() => import("./pages/Error"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Logout = lazy(() => import("./pages/Logout"));
const Contact = lazy(() => import("./pages/Contact"));
const Project = lazy(() => import("./pages/Project"));
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
const {stars}=useAuth();
  const [loading, setloading] = useState(true);


  useEffect(() => {

    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Mainloader />;
  }

  return (
    <BrowserRouter>
      <div className="relative">
        {/* Starry background */}
        <div className="background-stars">
          {stars}
        </div>

      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/adminpanel" element={<Protected element ={<AdminPanel />}/>} />
          <Route path="/addpractical" element={<Protected element={ <AddPractical />}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Protected element={<Project />}/>} />
          <Route path="/note" element={<Protected element={<Note />}/>} />
          <Route path="/todolist" element={ <Protected element={ <TodoList />}/>} />
          <Route path="/passwordapp" element={<Protected element={<PasswordManager />}/>} />
          <Route path="/study" element={<Protected element={<Study />}/>} />
          <Route path="/javaPracticals" element={<AllPracticals />} />
          <Route path="/documentry" element={<Documentry />} />
          {/* <Route path="/practical_1" element={<Practical />} /> */}
        </Routes>
      </Suspense>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
