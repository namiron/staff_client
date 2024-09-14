import React from "react";
import { IAuthProps } from "./types/IAuthProps";
import { useCurrentQuery } from "../../store/API/authAPI";
import { LOADING } from "../../assets/common/vars";

const Auth: React.FC<IAuthProps> = ({ children }) => {
  const { isLoading } = useCurrentQuery();
  if (isLoading) {
    return <span>{LOADING}</span>;
  }
  return children;
};

export default Auth;
