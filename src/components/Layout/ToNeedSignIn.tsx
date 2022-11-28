import React from "react";
import { useAppSelector } from "../../store/hooks";
import { Navigate, Outlet } from "react-router-dom";
import { selectLoginAddress } from "../../store/auth/selectors";

const ToNeedSignIn = () => {
  const signState = useAppSelector(selectLoginAddress);
  return signState !== "" ? <Outlet /> : <Navigate to="/needsignin" />;
};
export default ToNeedSignIn;
