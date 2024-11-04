import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
            >
              <Link to="/">
                <a>Home</a>
              </Link>
              <Link to="/statistics">
                <a>Statistics </a>
              </Link>
              <Link to="/dashboard">
                <a>Dashboard </a>
              </Link>
            </ul>
          </div>
          <Link to="/" className=" lg:text-2xl  font-bold">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  gap-8">
            <Link to="/">
              <a>Home</a>
            </Link>
            <Link to="/statistics">
              <a>Statistics </a>
            </Link>
            <Link to="/dashboard">
              <a>Dashboard </a>
            </Link>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <Link className="border rounded-full p-2 text-lg">
            <MdOutlineShoppingCart />
          </Link>
          <Link className="border rounded-full p-2 text-lg">
            <MdFavoriteBorder />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
