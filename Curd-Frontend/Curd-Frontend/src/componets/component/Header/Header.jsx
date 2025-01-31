import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  const Ul_Items = (
    <>
      <li>
        <NavLink to='/' >Home</NavLink>
      </li>
      <li>
        <NavLink to='/login' >Login</NavLink>
      </li>
      <li>
        <NavLink to='/curd' >Curd</NavLink>
      </li>
      <li>
        <NavLink to='/add-curd' >Add-Curd</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              
             {Ul_Items}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Curd-Oparation</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          
           {Ul_Items}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
