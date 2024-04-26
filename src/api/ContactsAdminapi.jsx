import React ,{useEffect} from "react";
import { useAuth } from "../context/contextapi";

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
            <td className=" border text-center">{i+1}</td>
            <td className="border text-center">{e.username}</td>
            <td className="border text-center text-wrap">{e.email}</td>
            <td className="border text-center">{e.message}</td>
            <td className="border text-center">1 2 3 </td>
          </tr>
        );
      })}
    </>
  );
};

export default ContactsAdminapi;
