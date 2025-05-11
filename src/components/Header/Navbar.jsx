import React from "react";
import { MdBookmarkAdd, MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100 w-11/12 mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>

          <a className=" text-xl hidden md:block">FlagshipFaceOff</a>
        </div>

        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex gap-5 px-1 text-2xl">
            <NavLink className="nav-link" to="cart">
              <MdShoppingCart></MdShoppingCart>
            </NavLink>

            <div className="relative">
              <NavLink className="nav-link" to="mark">
                <p className=" text-[16px] absolute right-8 -top-4">0</p>
                <MdBookmarkAdd></MdBookmarkAdd>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
