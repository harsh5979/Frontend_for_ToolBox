import React, { useState, createContext, useContext, useEffect } from "react";
import { toast } from "react-toastify";
// import "../dotenv/config"

export const Authcontext = createContext();

export const MycontextProvider = ({ children }) => {
  // const url = import.meta.env.REACT_API;
  // const url = import.meta.env.VITE_REACT_API;
  const url = import.meta.env.VITE_RENDER_API;

  
  // const url = "http://localhost:3000";
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
    toast.success("Logout....");

    return localStorage.removeItem("token");
  };
  const userAdmin = async () => {
    if (islogin) {
      const power = user.isadmin == true;
      // console.log(power);
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
  /******************************************************************************************* */
  //              CRUD Opration For Notes
  /******************************************************************************************* */
  //* Add notes.................
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
    toast.success(res.message);
    fetchnote();
    if (res.ok) {
    } else {
      toast(res.error ? res.error : res);
    }
    toast.error(res);
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
      setnotesdata(re);
      if (r.ok) {
        toast.success(r.message);
      } else {
        toast.error(r.message);
      }
    }
  };
  useEffect(() => {
    fetchnote();
  }, [islogin]);

  //updateNote..... Notes........................
  const updateNote = async (data, id) => {
    const r = await fetch(`${url}/user/api/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify(data),
    });
    const res = await r.json();
    if (r.ok) {
      await fetchnote();

      toast.success("Note edited successfully");
    } else {
      toast(res.error || "Failed to edit Note");
    }
  };

  // Delete Notes..........................
  const deleteNote = async (id) => {
    const r = await fetch(`${url}/user/api/deletenote/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const res = await r.json();
    if (r.ok) {
      toast.success("Note successfully deleted");
      fetchnote();
    } else {
      toast.error("Note not deleted!!");
    }
  };

  //* UserAdminPanel..........................................................
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
      toast.success(r.message);
      setfetchUser(re);
    } else {
      toast.error(r.message);
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
    if (r.ok) {
      toast.success(res.message);
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
      toast.success(r.message);
      setfetchContact(re);
    } else {
      toast.error(r.message);
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

    if (r.ok) {
      toast.success(res.message);
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

  /******************************************************************************************* */
  //              CRUD Opration For Todos
  /******************************************************************************************* */

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
    settodosdata(res);
  };

  // Adding  todos....
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
      toast.success("todo added successfully");
      await fetchtodos();
    } else {
      toast.error(res.error || "Failed to add todo");
    }
  };

  //Delete todo....
  const deleteTodo = async (id) => {
    const r = await fetch(`${url}/tmko/deletetodo/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const res = await r.json();
    if (r.ok) {
      toast.success(res.message);
      fetchtodos();
    }
  };
  // UpdateTodo  todos....
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
      toast.success("todo edited successfully");
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
      setpdata(re);
    } else {
      toast.error(r.message);
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
        updateNote,
        deleteNote,
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
