import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-transparent border border-red-500">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
          {/* <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>Home</li>
            <li>Colleges</li>
            <li>Admissions</li>
            <li>My college</li>
          </ul> */}
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <li>Home</li>
          <li>Colleges</li>
          <li>Admissions</li>
          <li>My college</li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/signin" className="btn">Sign In</Link>
      </div>
    </div>
  );
};

export default Header;
