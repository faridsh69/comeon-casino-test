import { Link } from "react-router-dom";
import MetaTags from "../components/MetaTags";

import { useAuth } from "../contexts/AuthContext";

export default function Home(): JSX.Element {
  const auth = useAuth();

  return (
    <>
      <MetaTags title="Home | Come On Casino" />
      <h1>Home! Come On test application</h1>
      <h5>All users (guests, authenticated) can see this path:</h5>

      {!auth.isUserLoggedIn ? <Link to="/login">Login</Link> : " "}
      {auth.isUserLoggedIn ? <Link to="/casino">Casino</Link> : " "}
    </>
  );
}
