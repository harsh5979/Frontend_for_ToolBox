import React,{useState} from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [loginActive, setloginActive] = useState(false);
  const [signupActive, setsignupActive] = useState(false);

  const handlelogin=()=>{
    setloginActive(true);
    setsignupActive(false);
    
  }
  const handlesignup=()=>{
    setsignupActive(true);
    setloginActive(false);

  }
  
  return (
    <>
      <nav className="flex justify-between bg-[#0a131d]  h-[8vh] my-auto items-center shadow-lg shadow-[#191a26a7]  ">
        <div className="logo text-center mx-2">
          <NavLink className="removeLinkHover " to="/">
          <h2 className="text-xl cursor-pointer text-[#9c6a34] hover:text-[#975d20] mx-7">Harsh's Portfolio</h2>
          </NavLink>
        </div>
        <div className="gap-16 flex list-none  mx-6 text-[#808080] ">
          <NavLink className={(e)=>{return e.isActive?"text-white after:w-[100%] after:bg-[#73a6e1] " :""}}  to="/">
            <li className=" py-3 ">Home</li>
          </NavLink>
          <NavLink className={(e)=>{return e.isActive?"text-white  after:w-[100%] after:bg-[#73a6e1]":""} } to="/Projects">
            <li className=" py-3">Projects</li>
          </NavLink>
          <NavLink className={(e)=>{return e.isActive?"text-white after:w-[100%] after:bg-[#73a6e1]":""} } to="/about">
            <li className=" py-3">About</li>
          </NavLink>
          <NavLink className={(e)=>{return e.isActive?"text-white after:w-[100%] after:bg-[#73a6e1]":""} } to="/contact">
            <li className=" py-3">Contact us</li>
          </NavLink>
        </div>
        <div className="btn mx-5 gap-2 ">

        <NavLink  to="/login" className={"removeLinkHover border-r border-white"}><button onClick={handlelogin} className={ `px-7 py-[6px]  bg-[#29303d] hover:bg-slate-500 rounded ${loginActive?"bg-slate-500 text-white":""}  `}>Login </button></NavLink>
        <NavLink to="/signup" className={"removeLinkHover"}><button onClick={handlesignup} className={`px-6 py-[6px] hover:bg-slate-500 bg-[#29303d] rounded ${signupActive?"bg-slate-500 text-white":""}  `}>Sign up </button></NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
