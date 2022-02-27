import React from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../contexts/AuthContext";
import AuthMiddlewarePropsInterface from "../interfaces/auth/AuthMiddlewarePropsInterface";

export default function AuthMiddleware(
  props: AuthMiddlewarePropsInterface
): JSX.Element {
  const navigate = useNavigate();
  const auth = useAuth();

  React.useEffect(() => {
    if (!auth.isUserLoggedIn) {
      return navigate("/login");
    }
  }, []);

  return <React.Fragment>{props.children}</React.Fragment>;
}
