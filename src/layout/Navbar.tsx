import { useState, useEffect } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { logout, selectCurrentUser } from "../redux/features/auth/authSlice";
import { selectCart } from "../redux/features/cart/cartSlice";

interface MenuItem {
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-neutral-content dark:bg-slate-800 text-slate-900 dark:text-slate-100/90">
        <div className="container mx-auto px-4 flex items-center justify-between py-2">
          <div>
            <p className="text-[15px] text-center md:text-start">
              Free shipping world wide for all orders over $199 Shop Now
            </p>
          </div>
          <div className="hidden md:flex items-center">
            <NavLink to={"#"} className={"text-sm font-medium"}>
              Track Order
            </NavLink>
            <span className="mx-3 h-4 w-px bg-slate-600 dark:bg-slate-600 inline-block" />
            <NavLink to={"#"} className={"text-sm font-medium"}>
              Help Center
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={`h-[60px] md:h-[80px] sticky top-0 left-0 right-0 w-full z-50 bg-base-100 dark:bg-slate-900 transition-all duration-300 flex items-center border-b border-slate-300 ${
          isScrolled
            ? "shadow dark:shadow-slate-800/40 h-[60px] md:h-[60px] border-b border-slate-300"
            : ""
        }`}
      >
        <nav className={`container mx-auto px-4 py-8 relative navbar`}>
          <div className="navbar-start">
            {/* Mobile menu button */}
            <div className="dropdown lg:hidden">
              <button
                className="btn btn-ghost"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo */}
            <a
              href="/"
              className="text-xl font-bold text-primary dark:text-white/90"
            >
              Taasu Soap
            </a>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="navbar-center hidden lg:flex h-full">
            <ul className="menu menu-horizontal p-0 h-full">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="relative group h-full flex items-center justify-center"
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `text-lg hover:text-amber-400 font-semibold dark:text-white/90 ${
                        isActive ? "text-amber-600" : "text-slate-800"
                      }`
                    }
                    style={{
                      background: "none",
                      boxShadow: "none",
                      border: "none",
                    }}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side icons */}
          <div className="navbar-end">
            <div className="flex items-center gap-2">
              {/* Wishlist */}
              {/* <div className="indicator">
                <button className="btn btn-ghost btn-circle dark:text-slate-100">
                  <Heart size={20} />
                </button>
                {wishlistCount > 0 && (
                  <span className="badge badge-sm badge-primary indicator-item">
                    {wishlistCount}
                  </span>
                )}
              </div> */}

              {/* Shopping Cart */}
              <div className="indicator">
                <NavLink
                  onClick={handleClick}
                  to={"/cart"}
                  className="btn btn-ghost btn-circle dark:text-slate-100"
                >
                  <ShoppingCart size={20} />
                </NavLink>

                {cartItems.length > 0 && (
                  <span className="badge badge-sm badge-primary indicator-item">
                    {cartItems.length}
                  </span>
                )}
              </div>

              {/* User Account */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle dark:text-slate-100"
                >
                  <User size={20} />
                </div>
                <ul className="dropdown-content menu bg-base-100 dark:bg-slate-800 rounded-box z-[1] w-52 p-2 shadow-lg border dark:border-slate-700 space-y-2">
                  {user?.id ? (
                    <>
                      <li>
                        <NavLink
                          to="/my-section/profile"
                          className="flex items-center gap-2"
                        >
                          <User size={18} /> My Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/my-section/orders"
                          className="flex items-center gap-2"
                        >
                          <ShoppingCart size={18} /> My Orders
                        </NavLink>
                      </li>

                      <hr className="my-2 border-slate-200 dark:border-slate-700" />

                      <li>
                        <button
                          onClick={handleLogout}
                          className="btn btn-error text-white btn-sm"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink
                          to="/login"
                          className={"btn btn-primary btn-sm"}
                        >
                          Login
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/signup"
                          className={"btn btn-outline btn-sm"}
                        >
                          Register
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="container mx-auto px-0 sm:px-2">
        {/* Navbar */}

        {/* Mobile Menu Overlay */}

        <div
          className={`block md:hidden fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center transition ease duration-300 z-[99] ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="">
            <button
              className="btn btn-ghost"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            <ul className="text-center space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                    to={item.href}
                    className={({ isActive }) =>
                      `text-lg hover:text-amber-400 font-semibold ${
                        isActive ? "text-amber-600" : "text-slate-800"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
