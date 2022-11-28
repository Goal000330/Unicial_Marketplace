import React from "react";
import { useAppSelector } from "../../store/hooks";
import { Navigate, Outlet } from "react-router-dom";
import { selectLoginAddress } from "../../store/auth/selectors";

const ToLands = () => {
  const signStage = useAppSelector(selectLoginAddress);

  return signStage === "" ? <Outlet /> : <Navigate to="/account?section=collections" />;
};
export default ToLands;
