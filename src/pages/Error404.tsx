import { Link } from "react-router-dom";

export default function Error404(): JSX.Element {
  return (
    <>
      <h1>404 - Not Found!</h1>
      <Link to="/">Home</Link>
    </>
  );
}
