import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/contextapi";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const Service = [
    {
      name: "Notes_io",
      link: "/note",
    },
    {
      name: "Todo-List",
      link: "/todolist",
    },

    {
      name: "Study_X",
      link: "/study",
    },
    {
      name: "Password_Manager",
      link: "/passwordapp",
    },
  ];
  const { islogin } = useAuth();

  // login & signup active or not ......
  // const [loginActive, setloginActive] = useState(false);
  // const [signupActive, setsignupActive] = useState(false);
  // const handlelogin = () => {
  //   setloginActive(true);
  //   setsignupActive(false);
  // };
  // const handlesignup = () => {
  //   setsignupActive(true);
  //   setloginActive(false);
  // };

  // issticky navbar styling.......
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

  // handale toggle navbar to phone
  const [hamb, sethamb] = useState(false);

  const handlemenubar = () => {
    if (!hamb) {
      menu.src = "/img/close.svg";
      sethamb(true);
      document.querySelectorAll(".humbar").forEach((e) => {
        e.classList.toggle("-left-[120%]");
        e.style.zIndex = "1";
      });
    } else if (hamb) {
      menu.src = "/img/hamburger.svg";
      sethamb(false);
      // document.querySelectorAll(".humbar").classListAll.add("-left-full");
      document.querySelectorAll(".humbar").forEach((e) => {
        e.classList.toggle("-left-[120%]");
      });
    }
  };
  const menubar = () => {
    menu.src = humb ? "/img/hamburger.svg" : "/img/close.svg";
  };
  const handletoggleclick = () => {
    document.querySelectorAll(".humbar").forEach((e) => {
      e.classList.toggle("-left-[120%]");

      handlemenubar();
    });
    sethamb(false);
  };

  // handle drop-down
  const [down, setdown] = useState(false);
  const [dropDownVisible, setdropDownVisible] = useState(false);

  const handleDropDown = () => {
    setdropDownVisible(!dropDownVisible);
    var d = document.getElementById("menu-drop-down");
    if (down) {
      setdown(false);
      d.classList.add("hidden");
    } else {
      d.classList.remove("hidden");
      setdown(true);
    }
  };

  const hdp = () => {
    var d = document.getElementById("menu-drop-down");
    d.classList.add("hidden");
  };

  return (
    <>
      <nav
        className={`flex justify-between  select-none ${
          isSticky ? "sticky top-0 bg-gray-800 z-10" : ""
        } bg-[#0a131d]   lg:h-[10vh] md:h-[10vh] my-auto items-center shadow-lg shadow-[#191a26a7]  `}
      >
        <div className="logo text-center mx-2 ">
          <NavLink className="removeLinkHover " to="/">
            <h2 className="md:text-xl cursor-pointer text-[#9c6a34] hover:text-[#975d20] md:mx-7 mx-5 text-2xl ">
              GECM ✨
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
          className="humbar -left-[120%] md:left-0  gap-16 list-none  md:mx-6 text-[#808080 ] md:bg-transparent md:w-fit  md:relative md:top-0 md:bg-none md:p-0   md:flex md:h-full absolute right-0 top-[75px]  bg-[#0a131d]  p-8  rounded w-[398px] text-center h-[750px] "
        >
          {/* ******************************************************************
                                    Home...................... 
         **********************************************************************/}

          <NavLink
            onClick={handletoggleclick}
            className={(e) => {
              return e.isActive
                ? "text-white after:w-[100%] after:bg-[#73a6e1] "
                : "";
            }}
            to="/"
          >
            <li className=" bd py-5 md:w-full  text-[17px] md:border-0 md:hover:bg-transparent hover:bg-[#3f5e8199] border">
              Home
            </li>
          </NavLink>

          {/* ******************************************************************
                                    Service...................... 
         **********************************************************************/}
          <div
          
            onClick={handleDropDown}
            onMouseEnter={() => {
              handleDropDown();
            }}
            onMouseLeave={hdp}
            value="service"
            className={"cursor-pointer relative  text-[#959393bd] hover:text-white "}
          >
            <li className="bd md:py-3 my-2 md:w-full  md:border-0    border relative  ">
              <div className="flex items-center justify-center">
                Services
                <FaAngleDown />
              </div>

              {islogin && (
                <ul
                  className="md:bg-slate-800 md:absolute top-[9vh] md:w-[10rem] md:translate-x-[-30%] hidden opacity-1   z-10 rounded-xl bd "
                  id="menu-drop-down"
                >
                  {/*All services ...........................*/}
                  {Service.map((e) => {
                    return (
                      <NavLink
                        key={e.name}
                        onClick={handletoggleclick}
                        className={(e) => {
                          return e.isActive
                            ? "text-white  after:w-[100%] after:bg-[#73a6e1]"
                            : "";
                        }}
                        to={`${e.link}`}
                      >
                        <li className=" py-3 px-1  md:border-0  hover:bg-[#3f5e8199] border">
                          {e.name}
                        </li>
                      </NavLink>
                    );
                  })}
                </ul>
              )}
              {!islogin && (
                <ul
                  className="md:bg-slate-800 md:absolute top-[9vh] md:w-[15rem] md:translate-x-[-30%] hidden opacity-1  rounded-xl z-10"
                  id="menu-drop-down"
                >
                  <h2 className="text-wrap my-5 text-red-700">
                    First you login!! then access all Services.....
                  </h2>
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
                      className={`md:px-7 md:py-[5px] py-[9px] px-9   bg-[#29303d] hover:bg-slate-500 rounded   `}
                    >
                      Login
                    </button>
                  </NavLink>
                </ul>
              )}
            </li>
          </div>

          {/* ******************************************************************
                        Project...................... 
         **********************************************************************/}
          <NavLink
            value="project"
            onClick={handletoggleclick}
            className={(e) => {
              return e.isActive
                ? "text-white  after:w-[100%] after:bg-[#73a6e1]"
                : "";
            }}
            to="/Project"
          >
            <li className="bd py-5 md:w-full  md:border-0 md:hover:bg-transparent hover:bg-[#3f5e8199] border">
              Projects
            </li>
          </NavLink>

          {/* ******************************************************************
                        Contact us ...................... 
         **********************************************************************/}
          <NavLink
            onClick={handletoggleclick}
            className={(e) => {
              return e.isActive
                ? "text-white after:w-[100%] after:bg-[#73a6e1]"
                : "";
            }}
            to="/contact"
          >
            <li className="bd  py-5 md:w-full  text-[17px]  md:border-0 md:hover:bg-transparent hover:bg-[#3f5e8199] border">
              Contact us
            </li>
          </NavLink>
        </div>
        {/* ******************************************************************
                        login , sign up  and logout buttons...................... 
         **********************************************************************/}
        <div className=" btn mx-[65px] humbar -left-[120%] md:left-0 gap-2 md:mx-5 md:block md:relative md:top-0 absolute top-[690px]      ">
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
                className={`md:px-7 md:py-[5px] py-[9px] px-9 mx-7  bg-[#29303d] hover:bg-slate-500 rounded   `}
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
              >
                <button
                  className={`md:px-7 md:py-[5px] py-[9px] px-9   bg-[#29303d] hover:bg-slate-500 rounded `}
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
                onClick={handletoggleclick}
              >
                <button
                  className={`md:px-7 md:py-[5px] py-[9px] px-9  hover:bg-slate-500 bg-[#29303d] rounded   `}
                >
                  Sign up
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
