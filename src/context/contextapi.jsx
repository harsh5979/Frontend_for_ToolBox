import React, { useState, createContext, useContext,useEffect } from "react";

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
    setuser("")

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
    const timeId =setTimeout(()=>{

      userdata()
    },1000)
    return ()=>{
      clearTimeout(timeId)
    }
   
  }, [token]);
  

  return (
    <Authcontext.Provider value={{ storeToken, islogin, Logout, user}}>
      {children}
    </Authcontext.Provider>
  );
};
export const useAuth = () => {
  const authcontextValue = useContext(Authcontext);

  return authcontextValue;
};
