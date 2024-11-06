import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getAllCard, getWishList } from "../utils";
const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [card, setCard] = useState([]);
  useEffect(() => {
    const addToCard = getAllCard();
    setCard(addToCard);
  }, []);

  const [wish, setWish] = useState([]);
  useEffect(() => {
    const addToWish = getWishList();
    setWish(addToWish);
  }, []);

  // console.log("fgjhfgkjhfhg", card.length);
  return (
    <div
      className={`w-11/12 mx-auto py-4  ${
        [
          "/",
          "/category/Phones",
          "/category/Laptops",
          "/category/Accessories",
          "/category/Smartwatches",
          "/category/MacBooks",
          "/category/iPhones",
        ].includes(pathname) &&
        "bg-violet-500 rounded-t-xl text-white mt-5 px-5"
      }`}
    >
      <div className="navbar">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-gray-800 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
            >
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border border-violet-500  py-1 px-4 rounded-md"
                      : ""
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border border-violet-500 text-violet-500 py-1 px-4 rounded-md"
                      : ""
                  }`
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border border-violet-500 text-violet-500 py-1 px-4 rounded-md"
                      : ""
                  }`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border border-violet-500 text-violet-500 py-1 px-4 rounded-md"
                      : ""
                  }`
                }
                to="/blogs"
              >
                Blog
              </NavLink>
            </ul>
          </div>
          <Link to="/" className=" lg:text-2xl  font-bold">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  gap-8">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border border-violet-500 text-white py-1 px-4 rounded-md"
                    : "py-1 px-5"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border border-violet-500 text-violet-500 py-1 px-4 rounded-md"
                    : "py-1 px-5 "
                }`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border border-violet-500 text-violet-500 py-1 px-4 rounded-md"
                    : "py-1 px-5 "
                }`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border border-violet-500 text-violet-500 py-1 px-4 rounded-md"
                    : "py-1 px-5"
                }`
              }
              to="/blogs"
            >
              Blog
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          {/* <Link className="border rounded-full p-2 text-lg">
            <MdOutlineShoppingCart />
            


          </Link> */}

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {card.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{card.length} Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* djkfgkfh */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <MdFavoriteBorder className="text-2xl" />

                <span className="badge badge-sm indicator-item">
                  {wish.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{wish.length} Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* djkfgkfh */}
          {/* <Link className="border rounded-full p-2 text-lg">
            <MdFavoriteBorder />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
