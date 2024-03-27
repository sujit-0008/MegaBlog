import React from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const logoutHandler = () => {
    const dispatch = useDispatch();
    authService.logout().then(() => dispatch(logout()));
  };
  return <button onClick={logoutHandler}> Logout</button>;
};

export default LogoutBtn;
