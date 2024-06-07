import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="h-fit md:h-screen m-auto">
      <div className=" flex justify-center content-center gap-5 mx-10 flex-wrap">
        {data.map((e) => {
          return (
            <div key={e.id} className="my-3 ">
              <div className=" border  p-5 rounded-lg md:h-full md:w-[300px] lg:h-full sm-h-full sm-w-full h-fit w-fit">
                <h5 className="text-2xl my-2">{e.title}</h5>
                <p className="text-sm text-gray-200/90">{e.dsc}</p>
                <NavLink to={e.url} className=" my-2 removeLinkHover">
                  <button
                    className={`md:px-7 mt-5  md:py-[5px] py-[9px] px-9 m-auto  bg-[#29303d] hover:bg-slate-500 rounded  `}
                  >
                    Get Code
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
