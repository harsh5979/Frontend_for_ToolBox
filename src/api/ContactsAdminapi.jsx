import React, { useEffect } from "react";
import { useAuth } from "../context/contextapi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ContactsAdminapi = () => {
  const { contscAdminpanel } = useAuth();
  const { fetchContact } = useAuth();
  useEffect(() => {
    contscAdminpanel();
  }, []);

  return (
    <>
      {fetchContact.map((e, i) => {
        return (
          <tr className="border " key={i}>
            <td className=" border text-center">{i + 1}</td>
            <td className="border text-center">{e.username}</td>
            <td className="border text-center text-wrap">{e.email}</td>
            <td className="border text-center">{e.message}</td>
            <td className="border text-center">
         
              <div className="flex mx-5 gap-5">
                <button className="px-2">
                  <FaEdit />
                </button>
                <button className="px-2">
                  <MdDelete />
                </button>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default ContactsAdminapi;
