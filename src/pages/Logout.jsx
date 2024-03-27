import React ,{useEffect}from "react";
import { useAuth } from "../context/contextapi";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const { Logout } = useAuth();
  useEffect(() => {
    Logout();
    navigate("/login");
  }, [Logout]);
  return <div></div>;
};

export default Logout;
