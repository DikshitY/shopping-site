import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
