import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>The page you requested was not found.</h1>

      <Link to={"/"}>Back to Form</Link>
    </div>
  );
};

export default NotFound;
