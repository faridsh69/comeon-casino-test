import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

export default function GuestMiddleware(
  props: React.PropsWithChildren<{}>
): JSX.Element {
  const navigate = useNavigate();
  const auth = useAuth();
  const { isUserLoggedIn } = auth;

  React.useEffect(() => {
    if (isUserLoggedIn) {
      return navigate("/");
    }
  }, []);

  return <>{!isUserLoggedIn ? props.children : ""}</>;
}
