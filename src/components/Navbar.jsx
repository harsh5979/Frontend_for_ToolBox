import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/contextapi";

const Navbar = () => {
  const { islogin } = useAuth();

  const [loginActive, setloginActive] = useState(false);
  const [signupActive, setsignupActive] = useState(false);

  const handlelogin = () => {
    setloginActive(true);
    setsignupActive(false);
  };
  const handlesignup = () => {
    setsignupActive(true);
    setloginActive(false);
  };
  const [hamb, sethamb] = useState(false);

  const handlemenubar = () => {
    if (!hamb) {
      menu.src = "/img/close.svg";
      sethamb(true);
      document.querySelectorAll(".humbar").forEach((e) => {
        e.classList.toggle("-left-full");
        e.style.zIndex = "1";
      });
    } else if (hamb) {
      menu.src = "/img/hamburger.svg";
      sethamb(false);
      // document.querySelectorAll(".humbar").classListAll.add("-left-full");
      document.querySelectorAll(".humbar").forEach((e) => {
        e.classList.toggle("-left-full");
      });
    }
  };
  const menubar =()=>{

    menu.src = humb?"/img/hamburger.svg":"/img/close.svg";
  }
  const handletoggleclick = () => {

    

    document.querySelectorAll(".humbar").forEach((e) => {
      e.classList.toggle("-left-full");
    });
    sethamb(false);
  };

  return (
    <>
      <nav className="flex justify-between  bg-[#0a131d]   h-[8vh] my-auto items-center shadow-lg shadow-[#191a26a7]  ">
        <div className="logo text-center mx-2 ">
          <NavLink className="removeLinkHover " to="/">
            <h2 className="md:text-xl cursor-pointer text-[#9c6a34] hover:text-[#975d20] md:mx-7 mx-2">
              Harsh's Portfolio
            </h2>
          </NavLink>
        </div>
        {/* hamburger bar  for phone */}
        <div className="  md:hidden   mx-2 ">
          <img
            id="menu"
            className=" invert-1 p-2  cursor-pointer mx-1"
            src="/img/hamburger.svg"
            onClick={handlemenubar}
            alt=""
          />
        </div>
        {/* nav element */}
        <div
          id="navElement"
          className="humbar -left-full md:left-0  gap-16 list-none  md:mx-6 text-[#808080 ] md:bg-transparent md:w-fit  md:relative md:top-0 md:bg-none md:p-0   md:flex md:h-full absolute right-0 top-[75px]  bg-[#0a131d]  p-8  rounded w-[398px] text-center  h-full "
        >
          <NavLink
            onClick={handletoggleclick}
            className={(e) => {
              return e.isActive
                ? "text-white after:w-[100%] after:bg-[#73a6e1] "
                : "";
            }}
            to="/"
          >
            <li className=" bd py-3 w-full  md:border-0 md:hover:bg-transparent hover:bg-[#3f5e8199] border">
              Home
            </li>
          </NavLink>
          <NavLink
            onClick={handletoggleclick}
            className={(e) => {
              return e.isActive
                ? "text-white  after:w-[100%] after:bg-[#73a6e1]"
                : "";
            }}
            to="/Projects"
          >
            <li className="bd py-3 w-full  md:border-0 md:hover:bg-transparent hover:bg-[#3f5e8199] border">
              Projects
            </li>
          </NavLink>
          <NavLink
            onClick={handletoggleclick}
            className={(e) => {
              return e.isActive
                ? "text-white after:w-[100%] after:bg-[#73a6e1]"
                : "";
            }}
            to="/about"
          >
            <li className="bd py-3 w-full  md:border-0 md:hover:bg-transparent hover:bg-[#3f5e8199] border">
              About
            </li>
          </NavLink>
          <NavLink
            onClick={handletoggleclick}
            className={(e) => {
              return e.isActive
                ? "text-white after:w-[100%] after:bg-[#73a6e1]"
                : "";
            }}
            to="/contact"
          >
            <li className="bd  py-3 w-full  md:border-0 md:hover:bg-transparent hover:bg-[#3f5e8199] border">
              Contact us
            </li>
          </NavLink>
        </div>
        {/* login , sign up  and logout buttons......................*/}
        <div className=" btn mx-[70px] humbar -left-full md:left-0 gap-2 md:mx-5 md:block md:relative md:top-0 absolute top-[420px]     ">
          {islogin ? (
            // logout button............
            <NavLink
              onClick={handletoggleclick}
              to="/logout"
              className={(e) => {
                return e.isActive
                  ? "text-white   after:bg-[#73a6e1] removeLinkHover"
                  : "removeLinkHover";
              }}
              // className={"removeLinkHover border-r border-white"}
            >
              <button
                onClick={handlelogin}
                className={`md:px-7 md:py-[5px] py-[9px] px-9 mx-7  bg-[#29303d] hover:bg-slate-500 rounded ${
                  loginActive ? "bg-slate-500 text-white" : ""
                }  `}
              >
                Logout
              </button>
            </NavLink>
          ) : (
            <>
            {/* login button...........*/}
              <NavLink
                onClick={handletoggleclick}
                to="/login"
                className={(e) => {
                  return e.isActive
                    ? "text-white   after:bg-[#73a6e1] removeLinkHover"
                    : "removeLinkHover";
                }}
                // className={"removeLinkHover border-r border-white"}
              >
                <button
                  onClick={handlelogin}
                  className={`md:px-7 md:py-[5px] py-[9px] px-9  bg-[#29303d] hover:bg-slate-500 rounded ${
                    loginActive ? "bg-slate-500 text-white" : ""
                  }  `}
                >
                  Login
                </button>
              </NavLink>
            {/* signup button...........*/}

              <NavLink
                to="/signup"
                className={(e) => {
                  return e.isActive
                    ? "text-white   after:bg-[#73a6e1] removeLinkHover"
                    : "removeLinkHover text-[#808080 ]";
                }}
                // className={"removeLinkHover"}
                onClick={handletoggleclick}
              >
                <button
                  onClick={handlesignup}
                  className={`md:px-7 md:py-[5px] py-[9px] px-9  hover:bg-slate-500 bg-[#29303d] rounded ${
                    signupActive ? "bg-slate-500 text-white" : ""
                  }  `}
                >
                  Sign up{" "}
                </button>
              </NavLink>
            </>
          )}
        </div>
      </nav>
      <hr className=" sm:hidden  border  border-[#7a8aa74d] " />
    </>
  );
};

export default Navbar;