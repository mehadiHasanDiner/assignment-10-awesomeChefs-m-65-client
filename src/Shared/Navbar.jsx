import React from "react";
import { Link } from "react-router-dom";
import { TbChefHat } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between shadow-2xl py-4 items-center px-16">
        <div>
          <h2 className="text-4xl font-bold flex text-pink-200 hover:text-yellow-200 cursor-pointer">
            <Link to="/">
              <span className=" text-3xl absolute top-1 -rotate-45 left-12">
                <TbChefHat />
              </span>{" "}
              Awesome Chefs
            </Link>{" "}
          </h2>
        </div>
        <nav>
          <Link className="mr-3" to="/">
            Home
          </Link>
          <Link className="mr-3" to="/blog">
            Blog
          </Link>
          <Link to="/signIn">Sign In</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
