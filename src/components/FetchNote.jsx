import React, { useEffect, useState } from "react";
import { useAuth } from "../context/contextapi";
// import { toast } from "react-toastify";

import { BsThreeDotsVertical } from "react-icons/bs";

const FetchNote = () => {
  const { reversedData } = useAuth();
  const [crud, setcrud] = useState(false);

  return (
    <div>
      <div className="mt-[50px]">
        <h1 className="text-2xl mb-6"> Fetch All Notes</h1>
      </div>
      <div className="border border-t-2 border-r-0 border-l-0  pt-5 px-5 flex flex-wrap gap-4 h-[75vh] mx-6 mb-4 overflow-y-scroll  snap-center ">
        {reversedData.length === 0 && (
          <div className="mx-8 my-4 p-3 text-2xl">No Notes to hare...</div>
        )}

        {reversedData.map((e) => {
          if (
            e.title !== null &&
            e.description !== undefined &&
            e.tag !== null
          ) {
            return (
              <div
                key={e._id}
                className="
              snap-center "
              >
                <div className="inline-block border h-[235px]   p-4 rounded-md w-[300px] shadow-xl shadow-zinc-600 mb-4 select-none">
                  <h1 className="text-xl text-left line-clamp-1   overflow-hidden flex  ">
                    <span className="text-slate-400 w-[75px]  mx-1 select-none ">
                      Title :
                    </span>
                    <div className="line-clamp-1 text-clip w-[250px] select-none ">
                      {e.title.slice(0, 17)}
                    </div>{" "}
                  </h1>
                  <div className=" mt-5   overflow-hidden  break-words  ">
                    <p className=" my-1 text-left  h-[75px] text-wrap  break-All   overflow-hidden flex  ">
                      <span className="text-slate-400 w-[75px] mx-1  ">
                        {`Desc : `}{" "}
                      </span>
                      <div className="line-clamp-3 w-[250px] ">
                        {e.description}
                      </div>
                    </p>
                  </div>
                  <h3 className="text-right text-xs mb-4 mt-4  relative flex left-[190px]  ">
                    <span className="text-red-500">Tag : </span>{" "}
                    <div className="line-clamp-1 text-ellipsis">
                      {e.tag.slice(0, 9)}
                    </div>
                  </h3>
                  <h4 className="text-sm text-left my-2 text-slate-400 ">
                    {e.date}
                  </h4>
                  <div className="rounded-full w-6 h-5 relative left-[250px] bottom-7 content-center flex justify-center cursor-pointer  border-black ">
                    <button onClick={(e) => setcrud(true)}>
                      <BsThreeDotsVertical />
                    </button>
                  </div>
                  {crud && (
                    <div className="relative bottom-[180px] left-[100px]  border  w-[150px] h-[120px] backdrop-blur-sm"></div>
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FetchNote;
