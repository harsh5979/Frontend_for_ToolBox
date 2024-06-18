import React, { useState, useEffect, Suspense, lazy } from "react";
// import PCards from "../components/javaPracticalCard";
const PCards = lazy(() => import("../components/javaPracticalCard"));
import { useAuth } from "../context/contextapi";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

const AllPracticals = () => {
  const [selectedPractical, setselectedPractical] = useState(1);
  const [loading, setloading] = useState(false);

  const { d, pdata } = useAuth();

  useEffect(() => {
    let n = 1;
    setloading(true);
    d(n).finally(() => {
      setloading(false);
    });
  }, []);
 

  const handlePracticals = (n) => {
    setloading(true);
    setselectedPractical(n);
    d(n).finally(() => {
      setloading(false);
    });
  };

  const renderPractical = () => {
    if (loading) {
      return <Loader />;
    }
    if (pdata !== null) {
     

      return <PCards pdata={pdata}  />;
    }
    return <Loader />;
  };

  const i = 0;
  useEffect(() => {
    const smoothScrollTo = (elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const navLinks = document.querySelectorAll("#navbar-example3 .nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        smoothScrollTo(targetId);
      });
    });
  }, []);
  const practical_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className="mt-1 justify-center content-center sticky">
      <div className="text-center my-1">
        <div className="  ">
          <ul className="  md:h-fit h-[85px] overflow-y-auto  text-[13px] md:text-[16px] w-[100vw]  flex   bg-gray-900  rounded-md    ">
            {practical_number.map((num) => {
              return (
                <li key={num} className="  md:mx-6 mx-2  ">
                  <NavLink
                    className={
                      activeItem === num
                        ? "text-white after:w-[100%] after:bg-[#73a6e1]"
                        : "text-gray-600"
                    }
                    aria-current="true"
                    to={`#${num}`}
                    onClick={() => {
                      handlePracticals(num);
                      setActiveItem(num);
                    }}
                  >
                    <h1 className=" ">Practical-{num}</h1>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* dsffffffffffffffffffffffffffffff */}
        <div className=" flex justify-center  ">
          <div className=" w-[500px]  justify-center   hidden md:flex my-4 ">
            <div className="m-auto">
              {pdata.map((e, i) => {
                return (
                  <a key={i} className=" " href={`#item-${i + 1}`}>
                    <li className="que ">Que-{i + 1}</li>
                  </a>
                );
              })}
              {/* <a className="  my-1" href="#item-2">
                <li className="que">Que-2</li>
              </a>
              <a className=" my-1" href="#item-3">
                <li className="que  ">Que-3</li>
              </a>
              <a className="" href="#item-4">
                <li className="que  ">Que-4</li>
              </a>
              <a className="" href="#item-5">
                <li className=" que ">Que-5</li>
              </a>
              <a className=" my-1" href="#item-6">
                <li className="que  ">Que-6</li>
              </a>
              <a className="  my-1" href="#item-7">
                <li className="que">Que-7</li>
              </a>
              <a className="  my-1" href="#item-8">
                <li className="que ">Que-8</li>
              </a> */}
            </div>
          </div>

          <div className=" overflow-y-auto h-[90vh] w-[3000px]   rounded-lg bd md:p-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example3"
              data-bs-smooth-scroll="true"
              className="scrollspy-example-2"
              tabIndex="0"
            >
              <h1 className="my-5 text-4xl">Practical-{selectedPractical}</h1>
              <div className="justify-center   ">
                {/* <PCards pdata={pdata} /> */}
                {renderPractical()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPracticals;
