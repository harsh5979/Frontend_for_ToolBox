import React , { useState ,createContext, useContext } from "react";

 export const Authcontext = createContext();

export const MycontextProvider = ({ children }) => {
    const [token, settoken] = useState( localStorage.getItem("token"));
    
  const storeToken = (servertoken) => {
    settoken(servertoken)
    return localStorage.setItem("token", servertoken);
  };

  let islogin = !!token;
  const Logout = ()=>{
    settoken("")
    return localStorage.removeItem("token");

  }


  return (
    <Authcontext.Provider value={{ storeToken,islogin,Logout }}>
      {children}
    </Authcontext.Provider>
  );
};
export const useAuth = () => {
  const authcontextValue = useContext(Authcontext);

  return authcontextValue;
};
