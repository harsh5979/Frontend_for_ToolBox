import React, { useEffect, useState } from "react";
import { useAuth } from "../context/contextapi";

const UserAdminapi = () => {
  const { userAdminpanel } = useAuth();
  useEffect(() => {
    userAdminpanel();
  }, []);
  const { fetchUser } = useAuth();

  return (
    <>

      {fetchUser.map((e,i) => {
          return (
              <tr className="border  " key={i}>
            <td className="tbd">{i+1}</td>
            <td className="tbd">{e.name}</td>
            <td className="tbd">{e.email}</td>
            <td className="tbd">1 2 3 </td>
          </tr>
        );
    })}

    </>
  );
};

export default UserAdminapi;
