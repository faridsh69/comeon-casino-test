import { useNavigate } from "react-router-dom";

import useAuth from "../contexts/AuthContext";
import { postLogout } from "../services/AuthService";

export default function Logout(): JSX.Element {
  const auth = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    postLogout({ username: auth.user.username }).then((response) => {
      if (response.status === "success") {
        auth.logout();
        return navigate("/login");
      }
    });
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
