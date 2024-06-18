import React from "react";
import { useForm } from "react-hook-form";
import { CiCircleInfo } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/contextapi";

const SignupForm = () => {
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
    const r = await fetch(`${url}/auth/api/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await r.json();
    // console.log(res);
    if (r.ok) {
      storeToken(res.authtoken);

      navigate("/login");
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div>
      <div className=" my-[40px] ">
        <form
          id="paintingForm"
          className="text-black mt-[40px] mx-auto "
          action=""
          onSubmit={handleSubmit(onsubmit)}
        >
          <div className="flex  flex-col gap-3 mt-5 items-center justify-center ">
            <div className="h-[60px] ">
              <input
                autoFocus
                type="text"
                placeholder="Enter Name*"
                className="placeholder:text-slate-800 bg-transparent border-solid focus:border-gray-300 focus:outline-none border-gray-600/40 border-4  rounded-b-lg"
                {...register("name", {
                  required: { value: true, message: "Name is require!" },
                  minLength: {
                    value: 3,
                    message: "enter name at least 3 charater ",
                  },
                })}
              />
              {errors.name && (
                <div className="text-red-800  mx-6 text-left text-xs flex py-1">
                  <div className="mx-1 py-1">
                    <CiCircleInfo />
                  </div>
                  {errors.name.message}
                </div>
              )}
            </div>

            <div className="h-[60px]">
              <input
                
                type="email"
                placeholder=" Email*"
                className="placeholder:text-slate-800 bg-transparent border-solid focus:border-gray-300 focus:outline-none border-gray-600/40 border-4 rounded-b-lg"
                name="email"
                {...register("email", {
                  required: { value: true, message: "email id is require!" },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <div className="text-red-800 text-left  mx-6 text-xs flex py-1 ">
                  <div className="mx-1 py-1">
                    <CiCircleInfo />
                  </div>
                  {errors.email.message}
                </div>
              )}
            </div>

            <div className="h-[60px]">
              <input
               
                type="text"
                placeholder=" Password*"
                className="placeholder:text-slate-800  bg-transparent border-solid focus:outline-none focus:border-gray-300 border-gray-600/40 border-4  rounded-b-lg"
                name="pincode"
                {...register("password", {
                  required: { value: true, message: "Enter Password!" },
                  minLength: {
                    value: 4,
                    message: "enter password at least 4 digit",
                  },
                })}
              />
              {errors.password && (
                <div className="text-red-800 text-left mx-6 text-xs flex py-1 ">
                  <div className="mx-1 py-1">
                    <CiCircleInfo />
                  </div>{" "}
                  {errors.password.message}
                </div>
              )}
            </div>
          </div>
          <div className=" flex-none">
            <button
              type="submit"
              value="submit"
              className=" hover:bg-blue-600   rounded w-[330px] mt-8 ml-auto font-bold  shadow-lg shadow-indigo-500/40 p-2 text-white bg-blue-500  justify-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
