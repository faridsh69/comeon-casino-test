import { useNavigate } from "react-router-dom";

import useAuth from "../contexts/AuthContext";

export default function Logout(): JSX.Element {
  const auth = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    auth.logout();
    return navigate("/login");
  };

  return (
    <div
      className="logout ui left floated secondary button inverted"
      onClick={logout}
    >
      <i className="left chevron icon"></i>Log Out
    </div>
  );
}
