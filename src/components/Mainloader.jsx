import React, { useEffect, useState } from "react";
import "../App.css";
import { useAuth } from "../context/contextapi";

const Mainloader = () => {
  const { stars } = useAuth();

  return (
    <div className="relative h-screen overflow-hidden  bg-black ">
      {stars}
      <div className="flex justify-center text-2xl items-center h-screen">
        <p className="absolute top-10 right-12 text-[12px]">
          कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। <br></br> मा कर्मफलहेतुर्भूर्मा ते
          सङ्गोऽस्त्वकर्मणि ||
        </p>
        <h1 className="my-2 text-center content-center  m-auto  text-3xl   transform -translate-y-1/2">
          Welcome to our website💫
        </h1>
        <button
          type="button"
          className="flex m-auto absolute left-1/2  bottom-1/4 transform -translate-x-1/2"
          disabled
        >
          <svg
            className="animate-spin h-5 w-5 mr-3 bg-red-600"
            viewBox="0 0 24 24"
          ></svg>
          Loading...
        </button>
      </div>
    </div>
  );
};

export default Mainloader;