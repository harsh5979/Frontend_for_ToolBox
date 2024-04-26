import React, { useState, createContext, useContext, useEffect } from "react";
import { toast } from "react-toastify";

export const Authcontext = createContext();

export const MycontextProvider = ({ children }) => {
  const url = "http://localhost:3000";
  const [token, settoken] = useState(localStorage.getItem("token"));
  const [user, setuser] = useState("");
  const [fetchUser, setfetchUser] = useState([""]);
  const [fetchContact, setfetchContact] = useState([""]);

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
    const response = await fetch(`${url}/auth/api/getuser`, {
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
    const response = await fetch(`${url}/user/api/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    toast(res.message);
    fetchnote();
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
      const r = await fetch(`${url}/user/api/fetchnote`, {
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
  const editNotes = () => {};
  // UserAdminPanel
  const userAdminpanel = async () => {
    const r = await fetch(`${url}/adminpanel/api/userpanel/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const re = await r.json();
    if (r.ok) {
      // console.log(re);
      setfetchUser(re);
    } else {
      toast(r.message);
    }
  };
  // ContactAdminPanel
  const contscAdminpanel = async () => {
    const r = await fetch(`${url}/adminpanel/api/contactpanel/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const re = await r.json();
    if (r.ok) {
      // console.log(re);
      setfetchContact(re);
    } else {
      toast(r.message);
    }
  };
  

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
        editNotes,
        userAdminpanel,
        fetchUser,
        contscAdminpanel,
        fetchContact
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
