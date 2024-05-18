import React, { useState, Suspense } from "react";
import card from "../api/StudyCardsApi";
const StudyCard = React.lazy(() => import("../components/StudyCard"));

const Study = () => {
  const [data, setdata] = useState(card);

  return (
    <div className="h-fit  justify-center flex items-center">
      <div className=" my-8">
        <Suspense fallback={<p>loading....</p>}>
          <StudyCard data={data} />
        </Suspense>
      </div>
    </div>
  );
};

export default Study;
