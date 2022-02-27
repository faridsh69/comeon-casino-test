import React from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../contexts/UserContext";
import OnlyChildrenPropsInterface from "../interfaces/OnlyChildrenPropsInterface";

export default function RequireAuthMiddleware(
  props: OnlyChildrenPropsInterface
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
