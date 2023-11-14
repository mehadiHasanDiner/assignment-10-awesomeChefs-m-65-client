import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { TbChefHat } from "react-icons/tb";
import { AuthContext } from "../provider/AuthProvider";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const active = {
    color: "yellow",
    fontWeight: "bold",
  };
  const inactive = {
    color: "white",
  };
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {
        console.log(console.error);
      });
  };
  return (
    <>
      <div className="flex justify-between shadow-2xl py-4 items-center px-16 bg-stone-900 sticky top-0 z-10">
        <div>
          <h2 className="text-4xl font-bold flex text-pink-200 hover:text-yellow-200 cursor-pointer">
            <span className=" text-3xl absolute top-1 -rotate-45 left-11">
              <TbChefHat />
            </span>{" "}
            Best Chef
          </h2>
        </div>
        <nav className="flex items-center">
          <NavLink
            className="mr-3"
            style={({ isActive }) => (isActive ? active : inactive)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="mr-3"
            style={({ isActive }) => (isActive ? active : inactive)}
            to="/blog"
          >
            Blog
          </NavLink>
          {user ? (
            <div className="flex items-center">
              <span className="avatar mx-3">
                <div className="w-12 ">
                  <span
                    className="tooltip tooltip-bottom absolute"
                    data-tip={user && user.displayName}
                  >
                    <img
                      className="rounded-full border-red-300 border-2"
                      src={user.photoURL}
                    />
                  </span>
                </div>
              </span>
              <span
                onClick={handleSignOut}
                className="tooltip tooltip-bottom"
                data-tip="Sign out"
              >
                <button className="btn btn-circle text-lg -mb-1">
                  <LuLogOut />
                </button>
              </span>
            </div>
          ) : (
            <NavLink
              className="mr-3"
              style={({ isActive }) => (isActive ? active : inactive)}
              to="/signIn"
            >
              Sign In
            </NavLink>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
