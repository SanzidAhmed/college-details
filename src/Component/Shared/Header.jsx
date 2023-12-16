import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
        .then(() => { })
        .catch((err) => {
            console.log(err.message);
        });
}
  console.log(user);
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
          <Link to="/">Home</Link>
          <Link to="/colleges">Colleges</Link>
          <Link to="/admission">Admissions</Link>
          <Link to="/mycolleges">My colleges</Link>
        </ul>
      </div>
      <div className="navbar-end">
        {user && <div className="dropdown dropdown-left ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleSignOut}>Logout</a>
            </li>
          </ul>
        </div>}
        {!user && <Link to='/signin' className="btn" >Sign In</Link>}
      </div>
    </div>
  );
};

export default Header;
