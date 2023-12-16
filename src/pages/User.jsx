import { Link } from "react-router-dom";

function User() {
  return (
    <div className="mt-16 p-4 sm:p-8 h-screen">
      <h1 className="font-bold text-3xl mb-12">Coming Soon . . .</h1>
      <Link
        className="bg-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-slate-100"
        to="/"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default User;
