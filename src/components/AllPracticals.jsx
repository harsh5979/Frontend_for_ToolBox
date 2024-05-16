import React, { useState, useEffect } from "react";
import PCards from "../components/javaPracticalCard";
import p_1 from "../api/java_practical/p-1";
import p_2 from "../api/java_practical/p-2";
import p_3 from "../api/java_practical/p-3";
import p_4 from "../api/java_practical/p-4";
import p_5 from "../api/java_practical/p-5";
import p_6 from "../api/java_practical/p-6";
import p_7 from "../api/java_practical/p-7";
import p_8 from "../api/java_practical/p-8";
import p_10 from "../api/java_practical/p-10";
import p_11 from "../api/java_practical/p-11";
import p_12 from "../api/java_practical/p-12";

import { NavLink } from "react-router-dom";

const AllPracticals = () => {
  const [selectedPractical, setselectedPractical] = useState(1);
  const handlePracticals = (n) => {
    setselectedPractical(n);
  };

  const renderPractical = () => {
    switch (selectedPractical) {
      case 1:
        return <PCards pdata={p_1} />;
      case 2:
        return <PCards pdata={p_2} />;
      case 3:
        return <PCards pdata={p_3} />;
      case 4:
        return <PCards pdata={p_4} />;
      case 5:
        return <PCards pdata={p_5} />;
      case 6:
        return <PCards pdata={p_6} />;
      case 7:
        return <PCards pdata={p_7} />;
      case 8:
        return <PCards pdata={p_8} />;
      case 10:
        return <PCards pdata={p_10} />;
      case 11:
        return <PCards pdata={p_11} />;
      case 12:
        return <PCards pdata={p_12} />;
      default:
        return null;
    }
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
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="mt-1 justify-center content-center sticky ">
      <div className="text-center ">
        <div className="  ">
          <ul className="  md:h-fit h-[60px]   w-[100vw]  flex flex-wrap  bg-gray-900  rounded-md    ">
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
              {}
              <a className=" " href="#item-1">
                <li className="que ">Que-1</li>
              </a>
              <a className="  my-1" href="#item-2">
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
              </a>
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
