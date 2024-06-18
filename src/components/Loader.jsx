import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="flex justify-center text-2xl items-center h-screen ">
        <button type="button" className="flex m-auto absolute top-[50%] ..." disabled>
          <svg
            className="animate-spin h-5 w-5 mr-3  my-2  bg-red-600 ..."
            viewBox="0 0 24 24"
          ></svg>
          Loading...
        </button>
      </div>
    </div>
  );
};

export default Loader;
