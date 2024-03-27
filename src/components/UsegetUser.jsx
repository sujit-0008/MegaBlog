import React, { useEffect, useState } from "react";
import { login, logout } from "../store/authSlice";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";

const UsegetUser = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return { loading };
};

export default UsegetUser;
