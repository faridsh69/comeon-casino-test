import React from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../contexts/AuthContext";
import GuestMiddlewarePropsInterface from "../interfaces/auth/GuestMiddlewarePropsInterface";

export default function GuestMiddleware(
  props: GuestMiddlewarePropsInterface
): JSX.Element {
  const navigate = useNavigate();
  const auth = useAuth();

  React.useEffect(() => {
    if (auth.isUserLoggedIn) {
      return navigate("/");
    }
  }, []);

  return <>{!auth.isUserLoggedIn ? props.children : ""}</>;
}
