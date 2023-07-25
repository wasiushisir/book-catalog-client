import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { setUser } from "../redux/user/userSlice";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
        localStorage.removeItem("accessToken");

        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex  ">
          <ul className="menu menu-horizontal px-2 text-black">
            <Link to="/bookList">
              <li>
                <a className="text-[18px]">Booklist</a>
              </li>
            </Link>
            <Link to="/wishlist">
              <li>
                <a className="text-[18px]">Wishlist</a>
              </li>
            </Link>
            {user?.email && (
              <Link to="/addNewBook">
                <li>
                  <a className="text-[18px]">Add New Book</a>
                </li>
              </Link>
            )}

            <Link to="/allBook">
              <li>
                <a className="text-[18px]">All Book</a>
              </li>
            </Link>

            {/* <li tabindex="0">
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
            <div className="dropdown dropdown-end">
              <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByvLJ7lA--BjsinK_YHd-RrFOxroDezMYGjo-Cgk0&s" />
                </div>
              </label>

              <ul
                tabindex={0}
                className="mt-3 z-[1]  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32"
              >
                {!user?.email && (
                  <Link to="/login">
                    <li>
                      <a>Login</a>
                    </li>
                  </Link>
                )}
                {user?.email && (
                  <li>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                )}
              </ul>
            </div>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </div>
  );
}