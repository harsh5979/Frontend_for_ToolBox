import React, { useState } from "react";
import card from "../api/StudyCardsApi";
import StudyCard from "../components/StudyCard";

const Study = () => {
  const [data, setdata] = useState(card);

  return (
    <div className="h-fit  justify-center flex items-center">
      <div className=" my-8">
        <StudyCard data={data} />
      </div>
    </div>
  );
};

export default Study;
