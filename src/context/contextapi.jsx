import React, { useState, createContext, useContext, useEffect } from "react";
import { toast } from "react-toastify";

export const Authcontext = createContext();

export const MycontextProvider = ({ children }) => {
  const [token, settoken] = useState(localStorage.getItem("token"));
  const [user, setuser] = useState("");

  const storeToken = (servertoken) => {
    settoken(servertoken);
    return localStorage.setItem("token", servertoken);
  };

  let islogin = !!token;
  const Logout = () => {
    settoken("");
    setuser("");

    return localStorage.removeItem("token");
  };

  const userdata = async () => {
    const response = await fetch("http://localhost:3000/auth/api/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      // body: JSON.stringify(data),
    });
    if (response.ok) {
      const r = await response.json();
      setuser(r);
      // console.log(r)
    }
  };
  useEffect(() => {
    const timeId = setTimeout(() => {
      userdata();
    }, 1000);
    return () => {
      clearTimeout(timeId);
    };
  }, [token]);

  // add notes
  const addnotes = async (data) => {
    // console.log(`add notes is`,data)
      const response = await fetch("http://localhost:3000/user/api/addnote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify(data),
      });
    
    const res = await response.json();
    toast(res.message);
    fetchnote()
    if (res.ok) {
    } else {
      toast(res.error ? res.error : res);
    }
    toast(res);
  };
  
  // fetch all notes..............
  const [notesdata, setnotesdata] = useState([""]);

  const fetchnote = async () => {

    if (islogin) {
      
    const r = await fetch("http://localhost:3000/user/api/fetchnote", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const re = await r.json();
    // console.log(re);
    setnotesdata(re);

    // console.log(notesdata);
    if (r.ok) {
      toast(r.message);
    } else {
      toast(r.message);
    }
  }
     
  };
  useEffect(() => {
    fetchnote();
  }, [islogin]);

//edit Notes........................
  const editNotes =()=>{


  }

  return (
    <Authcontext.Provider
      value={{
        storeToken,
        islogin,
        Logout,
        user,
        token,
        fetchnote,
        notesdata,
        addnotes,
        editNotes
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};
export const useAuth = () => {
  const authcontextValue = useContext(Authcontext);

  return authcontextValue;
};
