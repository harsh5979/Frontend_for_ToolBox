import React, { useEffect, useState } from "react";
import { useAuth } from "../context/contextapi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UserAdminapi = () => {
  const { userAdminpanel } = useAuth();
  useEffect(() => {
    userAdminpanel();
  }, []);
  const { fetchUser, deleteUser } = useAuth();

  const handaleDelete = (id) => {
    deleteUser(id);
  
  };

  return (
    <>
      {fetchUser.map((e, i) => {
        return (
          <tr className="border  " key={i}>
            <td className="tbd">{i + 1}</td>
            <td className="tbd">{e.name}</td>
            <td className="tbd">{e.email}</td>
            <td className="tbd">
              <div className="flex mx-5 gap-5">
                <button className="px-2">
                  <FaEdit size={25}/>
                </button>
                <button className="px-2" onClick={() => handaleDelete(e._id)}>
                  <MdDelete size={25}/>
                </button>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default UserAdminapi;
