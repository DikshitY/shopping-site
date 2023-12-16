import Searchbar from "./Searchbar";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  const style = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  const handleClick = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav className="bg-white z-10 fixed top-0 left-0 right-0 w-screen h-16 flex justify-between items-center sm:p-4 p-2">
      <div className="flex flex-col sm:flex-row items-center md:w-3/4 sm:gap-16">
        <NavLink
          to="."
          className="font-bold sm:text-2xl text-xl self-start"
          style={({ isActive }) => (isActive ? style : null)}
        >
          #SHOPEE
        </NavLink>
        <Searchbar />
      </div>
      <button className="sm:hidden text-3xl sm:text-4xl" onClick={handleClick}>
        {isMenu ? <IoMdClose /> : <IoMdMenu />}
      </button>

      <div
        className={`${
          isMenu ? "flex" : "hidden"
        } flex-col fixed top-16 right-0 z-10 bg-white shadow-xl sm:hidden w-24 h-44 rounded items-end`}
      >
        <NavLink
          className="hover:bg-slate-200 rounded-full p-4"
          to="wishlist"
          style={({ isActive }) => (isActive ? style : null)}
        >
          WishList
        </NavLink>
        <NavLink
          className="hover:bg-slate-200 rounded-full p-4"
          to="cart"
          style={({ isActive }) => (isActive ? style : null)}
        >
          Cart
        </NavLink>
        <NavLink
          className="hover:bg-slate-200 rounded-full p-4"
          to="user"
          style={({ isActive }) => (isActive ? style : null)}
        >
          User
        </NavLink>
      </div>
      <div className="gap-4 hidden sm:flex">
        <NavLink
          className="hover:bg-slate-200 rounded-full p-4"
          to="wishlist"
          style={({ isActive }) => (isActive ? style : null)}
        >
          WishList
        </NavLink>
        <NavLink
          className="hover:bg-slate-200 rounded-full p-4"
          to="cart"
          style={({ isActive }) => (isActive ? style : null)}
        >
          Cart
        </NavLink>
        <NavLink
          className="hover:bg-slate-200 rounded-full p-4"
          to="user"
          style={({ isActive }) => (isActive ? style : null)}
        >
          User
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
