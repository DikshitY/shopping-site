// import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function Error() {
  // const error = useRouteError();
  // console.log(error);

  return (
    <div>
      <h1>Oops!!</h1>
      <p>Sorry, the page you were looking for was not found.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Error;
