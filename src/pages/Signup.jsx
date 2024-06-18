import React from "react";
import SignupForm from "../components/SignupForm";
import Login from "./Login";
import { NavLink } from "react-router-dom";


const Signup = () => {

  return (
    <div className="h-[600px] my-7 mt-10">
      <div className=" md:w-[30%] w-[97%] m-auto md:my-12  text-black   bg-gradient-to-t from-gray-400 to-slate-500 rounded-md my-8 p-5  h-[500px] md:h-[500px] md:m-auto items-center justify-center text-center">
        <div className="items-center  ">
          <h1 className="text-center text-4xl font-serif mx-8 mt-[60px] select-none">Sign Up</h1>
          <h3 className="my-2 flex justify-center "><h2 className="select-none text-slate-600">Already a member?</h2> <NavLink className={'removeLinkHover text-blue-800 hover:text-blue-600 '} to="/login" element={<Login/>}>Log In!</NavLink> </h3>

        </div>
        <div>

        <SignupForm/>
        </div>
  
      </div>
    </div>
  );
};

export default Signup;
