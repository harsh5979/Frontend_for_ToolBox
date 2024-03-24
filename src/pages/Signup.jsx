import React from "react";
import { useForm } from "react-hook-form";
import { CiCircleInfo } from "react-icons/ci";
import SignupForm from "../components/SignupForm";
import Login from "./Login";
import { NavLink } from "react-router-dom";


const Signup = () => {

  return (
    <div>
      <div className=" w-[30%] border text-black  bg-[#f3f4f6] rounded-md my-8 p-5  h-[560px] m-auto items-center justify-center text-center">
        <div className="items-center  ">
          <h1 className="text-center text-4xl font-serif mx-8 mt-[60px]">Sign Up</h1>
          <h3 className="my-2">Already a member? <NavLink className={'removeLinkHover text-blue-400 hover:text-blue-800 '} to="/login" element={<Login/>}>Log In!</NavLink> </h3>

        </div>
        <SignupForm/>
  
      </div>
    </div>
  );
};

export default Signup;
