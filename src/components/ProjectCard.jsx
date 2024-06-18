import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/contextapi";
import { toast } from "react-toastify";

const Cards = ({ data }) => {
  const { islogin } = useAuth();
  if (islogin == false) {
    toast.error("Please Login First.....")
  }

  return (
    <div>
      <div id="service" className=" mx-3 my-2  p-2  rounded-md shadow-lg ">
        <div className="md:text-sm  text-sm text-gray-700 p-2">
          <div className="flex font-mono  justify-center font-thin md:text-3xl text-2xl flex-col">
            <h1 className="text-center text-5xl hover:text-gray-500 my-8 select-none ">
              Products
            </h1>
          </div>
        </div>

        <div className="flex md:gap-8  m-auto  md:m-auto flex-col md:flex-row  items-center justify-center flex-wrap">
          {data.map((e) => {
            return (
              <div key={e.id}>
                <NavLink to={islogin && e.url} className={"removeLinkHover"}>
                  <div
                    id="card"
                    className=" transition duration-300 ease-in-out transform hover:-translate-y-3 hover:text-black flex flex-col w-full md:h-[500px]  h-[450px] my-4 relative  justify-center  bg-white md:rounded-2xl rounded-md overflow-hidden shadow-lg"
                  >
                    <img
                      src={e.image}
                      alt="Service Image"
                      className="rounded-xl  h-[250px] my-5 mx-5 object-cover object-center"
                    />
                    <div className=" p-1">
                      <h2 className="text-xl font-semibold mb-4 text-gray-800 ">
                        {e.title}
                      </h2>
                      <p className="text-gray-700 my-6 text-sm">{e.dsc}</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
