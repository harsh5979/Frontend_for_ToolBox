import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/contextapi";

const Navbar = () => {
  const { islogin } = useAuth();

  const [loginActive, setloginActive] = useState(false);
  const [signupActive, setsignupActive] = useState(false);

  const [isSticky, setisSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setisSticky(true);
      } else {
        setisSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  const menubar = () => {
    menu.src = humb ? "/img/hamburger.svg" : "/img/close.svg";
  };
  const handletoggleclick = () => {
    document.querySelectorAll(".humbar").forEach((e) => {
      e.classList.toggle("-left-full");
    });
    sethamb(false);
  };

  return (
    <>
      <nav
        className={`flex justify-between  ${
          isSticky ? "sticky top-0 bg-gray-800 z-10" : ""
        } bg-[#0a131d]   lg:h-[10vh] md:h-[9vh] my-auto items-center shadow-lg shadow-[#191a26a7]  `}
      >
        <div className="logo text-center mx-2 ">
          <NavLink className="removeLinkHover " to="/">
            <h2 className="md:text-xl cursor-pointer text-[#9c6a34] hover:text-[#975d20] md:mx-7 mx-5 text-2xl ">
              HP ✨
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
            <li className=" bd py-5 w-full  text-[17px] md:border-0 md:hover:bg-transparent hover:bg-[#3f5e8199] border">
              Home
            </li>
          </NavLink>
          {islogin && (
            <NavLink
              onClick={handletoggleclick}
              className={(e) => {
                return e.isActive
                  ? "text-white  after:w-[100%] after:bg-[#73a6e1]"
                  : "";
              }}
              to="/note"
            >
              <li className="bd py-5 w-full  md:border-0 md:hover:bg-transparent hover:bg-[#3f5e8199] border">
                Notes
              </li>
            </NavLink>
          )}
          {islogin && (
            <NavLink
              onClick={handletoggleclick}
              className={(e) => {
                return e.isActive
                  ? "text-white  after:w-[100%] after:bg-[#73a6e1]"
                  : "";
              }}
              to="/passwordapp"
            >
              <li className="bd py-5 w-full  md:border-0 md:hover:bg-transparent hover:bg-[#3f5e8199] border">
                Password_X
              </li>
            </NavLink>
          )}
          <NavLink
            onClick={handletoggleclick}
            className={(e) => {
              return e.isActive
                ? "text-white  after:w-[100%] after:bg-[#73a6e1]"
                : "";
            }}
            to="/Project"
          >
            <li className="bd py-5 w-full  md:border-0 md:hover:bg-transparent hover:bg-[#3f5e8199] border">
              Projects
            </li>
          </NavLink>
         

{/* about page */}
          {/* <NavLink
            onClick={handletoggleclick}
            className={(e) => {
              return e.isActive
                ? "text-white after:w-[100%] after:bg-[#73a6e1]"
                : "";
            }}
            to="/about"
          >
            <li className="bd py-5 w-full text-[17px] md:border-0 md:hover:bg-transparent hover:bg-[#3f5e8199] border">
              About
            </li>
          </NavLink> */}
          <NavLink
            onClick={handletoggleclick}
            className={(e) => {
              return e.isActive
                ? "text-white after:w-[100%] after:bg-[#73a6e1]"
                : "";
            }}
            to="/contact"
          >
            <li className="bd  py-5 w-full text-[17px]  md:border-0 md:hover:bg-transparent hover:bg-[#3f5e8199] border">
              Contact us
            </li>
          </NavLink>
          <NavLink
            onClick={handletoggleclick}
            className={(e) => {
              return e.isActive
                ? "text-white  after:w-[100%] after:bg-[#73a6e1]"
                : "";
            }}
            to="/adminpanel"
          >
            <li className="bd py-5 w-full  md:border-0 md:hover:bg-transparent hover:bg-[#3f5e8199] border">
              Admin Panel
                          </li>
          </NavLink>
        </div>
        {/* login , sign up  and logout buttons......................*/}
        <div className=" btn mx-[70px] humbar -left-full md:left-0 gap-2 md:mx-5 md:block md:relative md:top-0 absolute top-[470px]     ">
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
                    ? "text-white    after:bg-[#73a6e1] removeLinkHover"
                    : "removeLinkHover";
                }}
                // className={"removeLinkHover border-r border-white"}
              >
                <button
                  onClick={handlelogin}
                  className={`md:px-7 md:py-[5px] py-[9px] px-9   bg-[#29303d] hover:bg-slate-500 rounded ${
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
