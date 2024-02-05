/* eslint-disable react/prop-types */
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const {user} = UserAuth()

  if (!user) {
    return <Navigate to='/' />
  } else {
    return <Outlet />
  }
}

export default ProtectedRoute