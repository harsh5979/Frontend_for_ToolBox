import React from "react";
import SignupForm from "../components/SignupForm";
import Login from "./Login";
import { NavLink } from "react-router-dom";


const Signup = () => {

  return (
    <div className="h-[600px] my-7 mt-10">
      <div className=" md:w-[30%] w-[97%] mx-2 md:my-12 border text-black  bg-[#f3f4f6] rounded-md my-8 p-5  h-[500px] md:h-[500px] md:m-auto items-center justify-center text-center">
        <div className="items-center  ">
          <h1 className="text-center text-4xl font-serif mx-8 mt-[60px]">Sign Up</h1>
          <h3 className="my-2 ">Already a member? <NavLink className={'removeLinkHover text-blue-400 hover:text-blue-800 '} to="/login" element={<Login/>}>Log In!</NavLink> </h3>

        </div>
        <div>

        <SignupForm/>
        </div>
  
      </div>
    </div>
  );
};

export default Signup;
