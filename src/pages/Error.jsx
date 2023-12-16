// import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function Error() {
  // const error = useRouteError();
  // console.log(error);

  return (
    <div className="mt-16 p-4 sm:p-8 h-screen">
      <h1 className="font-bold text-3xl mb-4">Oops!!</h1>
      <p className="mb-8">Sorry, the page you were looking for was not found.</p>
      <Link className="bg-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-slate-100" to="/">Return to Home</Link>
    </div>
  );
}

export default Error;
