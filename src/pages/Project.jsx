import React, { useState } from "react";
import card from "../api/ProjectCardsapi";
import Cards from "../components/ProjectCard";

const Project = () => {
  const [data, setdata] = useState(card);

  return (
    <div>
      <div className="">
        <Cards data={data} />
      </div>
    </div>
  );
};

export default Project;
