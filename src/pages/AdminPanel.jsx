import React, { useState } from "react";
import UserAdminapi from "../api/UserAdminapi";
import ContactsAdminapi from "../api/ContactsAdminapi";
const AdminPanel = () => {
  // preventDefault();
  const [option, setoption] = useState();

  return (
    <div className={`h-${option ?"full":"screen"}` } >
      <h1 className="text-5xl text-center my-5 font-mono text-gray-200">
        Admin Panel{" "}
      </h1>
      <hr className="md:w-[15%] w-[59%] m-auto border-2 rounded  border-purple-600 my-1" />
      <div className="text-center m-auto justify-center flex gap-5 mt-[80px]">
        <li>
          <label htmlFor="admin" className="md:text-2xl">
            Choose a Data :
          </label>
        </li>
        <select
          name="admin"
          id=""
          onChange={(e) => setoption(e.target.value)}
          className="w-[190px] bg-gray-600 rounded-md h-11 "  defaultValue={"choose"}
        >
          <option value="choose" className="h-[250px] overflow-auto">choose the value ... </option>
          <option value="Users">Users data</option>
          <option value="Contacts">Contacts info</option>
        </select>
      </div>
      

      {option =="Users" &&  (
        <div className=" my-4 h-screen">
          <table className="justify-center m-auto rounded-lg overflow-hidden border-transparent bg-white text-black">
            <thead className="bg-gray-600">
              <tr>

              <th className="border p-2 px-2">no.</th>
              <th className="border p-2 px-3 w-[290px] ">name</th>
              <th className="border p-2 px-3 w-[340px]">email</th>
              <th className="border p-2 px-3 w-[250px]">oprations</th>
              </tr>
            </thead>
            <tbody>
              <UserAdminapi />
            </tbody>
          </table>
        </div>
      )}
      {option =="Contacts" &&  (
        <div className=" my-4 h-full ">
          <table className="justify-center m-auto rounded-lg overflow-hidden border-transparent bg-white text-black">
            <thead className="bg-gray-600">
              <tr>
              <th className="border ">no.</th>
              <th className="border p-2 px-3 md:w-[290px] ">name</th>
              <th className="border p-2 px-3 md:w-[340px]">email</th>
              <th className="border p-2 px-3 md:w-[340px]">message</th>
              <th className="border p-2 px-3 md:w-[250px]">oprations</th>
              </tr>
            </thead>
            <tbody >

              <ContactsAdminapi/>
            </tbody>
          </table>
        </div>
       )} 
    </div>
  );
};

export default AdminPanel;
