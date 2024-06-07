import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CiCircleInfo } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import Signup from "../pages/Signup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/contextapi";
const LoginForm = () => {
  const { storeToken, url } = useAuth();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    const r = await fetch(`${url}/auth/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await r.json();
    // console.log(res);
    if (r.ok) {
      // console.log(res.authtoken)
      storeToken(res.authtoken);
      // const ta= await localStorage.setItem("token", res.authtoken);
      navigate("/");
      toast(res.message);
    } else {
      toast(res.error ? res.error : res);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onsubmit)}
        id="paintingForm"
        className="max-w-sm mx-auto mt-8"
      >
        <div className="mb-4 ">
          <input
            type="text"
            placeholder="Email or Username"
            name="email"
            {...register("email", {
              required: { value: true, message: "Enter valid email!!" },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email address.",
              },
            })}
            className="placeholder:text-slate-800 bg-transparent block w-full px-4 py-2 my-8  border-4  rounded-b-lg focus:outline-none focus:border-gray-300 border-gray-600/40 "
          />
          {errors.email && (
            <div className="text-red-800 text-left text-xs flex py-1  ">
              <div className="mx-1 py-1">
                <CiCircleInfo />
              </div>
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Password"
            name="password"
            {...register("password", {
              required: { value: true, message: "Enter Password!" },
              minLength: {
                value: 1,
                message: "enter password at least 4 digit",
              },
            })}
            className="placeholder:text-slate-800 bg-transparent  block w-full px-4 py-2 my-7 border-4  rounded-b-lg focus:outline-none focus:border-gray-300 border-gray-600/40 "
          />
          {errors.password && (
            <div className="text-red-800 text-left text-xs flex py-1 ">
              <div className="mx-1 py-1">
                <CiCircleInfo />
              </div>
              {errors.password.message}
            </div>
          )}
          <div className="mb-3 relative top-0 ">
            <h3 className="text-right ">
              {" "}
              <NavLink
                to="/forgotpassword"
                className={"removeLinkHover text-blue-600 hover:text-blue-800 "}
              >
                forgot password?
              </NavLink>
            </h3>
          </div>
        </div>

        <button
          value="submit"
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
      </form>
      <div className="">
        <h3 className="my-3 text-center">
          Don't have an account?{" "}
          <NavLink
            className={"removeLinkHover text-blue-600 hover:text-blue-800 "}
            to="/signup"
            element={<Signup />}
          >
            Signup!
          </NavLink>{" "}
        </h3>
      </div>
    </div>
  );
};

export default LoginForm;
