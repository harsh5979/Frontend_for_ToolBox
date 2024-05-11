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
  // addpracticals................
  const addPractical = async (data) => {
    const r = await fetch(`${url}/adminpanel/api/addpractical/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify(data),
    });
    const re = await r.json();
    // if (r.ok) {
    //   // console.log(re);
    // } else {
    //   toast(r);
    // }
  };

  // todos crud oprations......................

  // fetch todos......
  const [todosapi, settodosapi] = useState([" "]);

  const fetchtodos = async () => {
    const r = await fetch(`${url}/tmko/fetchtodo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const res = await r.json();
    // console.log(res);
    settodosapi(res);
  };


  // add  todos....
  const addTodo = async (data) => {
    const r = await fetch(`${url}/tmko/addtodo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify(data),
    });
    const res = await r.json();
    if (r.ok) {
      toast("todo added successfully");
     await fetchtodos();
    } else {
      toast(res.error || "Failed to add todo");
    }
  };

  //delete todo....
  const deleteTodo = async (id) => {
    const r = await fetch(`${url}/tmko/deletetodo/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const res = await r.json();
    console.log(res);
    if (r.ok) {
      toast(res.message);
      fetchtodos();
    }
  };
    // updateTodo  todos....
    const updateTodo = async (data,id) => {
      const r = await fetch(`${url}/tmko/updatetodo/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify(data),
      });
      const res = await r.json();
      if (r.ok) {
        toast("todo edited successfully");
       await fetchtodos();
      } else {
        toast(res.error || "Failed to edit todo");
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
        fetchContact,
        addTodo,
        fetchtodos,
        todosapi,
        deleteTodo,
        updateTodo,
        addPractical,
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
