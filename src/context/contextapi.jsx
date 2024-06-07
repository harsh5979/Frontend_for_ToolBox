import React, { useState, createContext, useContext, useEffect } from "react";
import { toast } from "react-toastify";

export const Authcontext = createContext();

export const MycontextProvider = ({ children }) => {
  const url = "http://localhost:3000";
  // const url = "http://15.207.255.221:5001"
  // const url = "https://kb-kc44.onrender.com";
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
  const userAdmin = async () => {
    if (islogin) {
      const power = user.isadmin == true;
      console.log(power);
    }
  };
  useEffect(() => {
    userAdmin();
  }, [token]);

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
      // console.log(r)
      setuser(r);
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

  // add notes.................
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
  const reversedData = [...notesdata].reverse();
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
  // deleteUser...................
  const deleteUser = async (id) => {
    const r = await fetch(`${url}/adminpanel/api/du/${id}`, {
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
      userAdminpanel();
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
  // deleteContact...................
  const deleteContact = async (id) => {
    const r = await fetch(`${url}/adminpanel/api/cu/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const res = await r.json();
    // console.log(res);
    if (r.ok) {
      toast(res.message);
      contscAdminpanel();
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
  const [todosdata, settodosdata] = useState([" "]);
  // const [todosapi, settodosapi] = useState([" "]);
  const todosapi = [...todosdata].reverse();
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
    settodosdata(res);
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
  const updateTodo = async (data, id) => {
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

  // fetch practicals.............
  const [pdata, setpdata] = useState([""]);

  const d = async (n) => {
    const r = await fetch(`${url}/adminpanel/api/fetchPracticals/${n}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const re = await r.json();
    if (r.ok) {
      // console.log(re);
      setpdata(re);
    } else {
      toast(r.message);
    }
  };

  useEffect(() => {
    let n = 1;
    d(n);
  }, []);

  return (
    <Authcontext.Provider
      value={{
        url,
        storeToken,
        islogin,
        Logout,
        user,
        userAdmin,
        token,
        fetchnote,
        notesdata,
        reversedData,
        addnotes,
        editNotes,
        userAdminpanel,
        deleteUser,
        fetchUser,
        contscAdminpanel,
        deleteContact,
        fetchContact,
        addTodo,
        fetchtodos,
        todosapi,
        deleteTodo,
        updateTodo,
        addPractical,
        d,
        pdata,
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
