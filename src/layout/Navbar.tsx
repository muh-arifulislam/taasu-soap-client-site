import { TbLogout2 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { logout, selectCurrentUser } from "../redux/features/auth/authSlice";
import { navLinksData } from "../constant/navLInkData";

import profileImg from "../assets/images/astronaut.png";
import { selectCart } from "../redux/features/cart/cartSlice";
import useCalculateSubtotal from "../utils/calculateSubtotal";

const Navbar = () => {
  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  };

  const user = useAppSelector(selectCurrentUser);

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const cartItems = useAppSelector(selectCart);

  const subtotal = useCalculateSubtotal();

  return (
    <div className="container mx-auto z-[99999]">
      <div className="navbar bg-base-100 z-[99999]">
        <div className="navbar-start z-[99999]">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden z-50"
            >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link onClick={handleClick} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} to="/blogs">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Taasu Soap</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center">
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
                    {cartItems?.length}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[9999] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">
                    {cartItems?.length} Items
                  </span>
                  <span className="text-info">Subtotal: ${subtotal}</span>
                  <div className="card-actions">
                    <NavLink
                      onClick={handleClick}
                      to={"/cart"}
                      className="btn btn-primary btn-block"
                    >
                      View cart
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={profileImg} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-52 p-2 shadow"
                >
                  {navLinksData.map((item) => (
                    <li key={item.url}>
                      <NavLink onClick={handleClick} to={item.url}>
                        <span className="">{item.icon}</span>
                        {item.label}
                      </NavLink>
                    </li>
                  ))}

                  <li>
                    <a
                      onClick={() => {
                        handleLogout();
                        handleClick();
                      }}
                      className=""
                    >
                      <span className="">
                        <TbLogout2 />
                      </span>
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink to={"/login"} className={`btn btn-primary px-6`}>
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
