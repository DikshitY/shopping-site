import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
