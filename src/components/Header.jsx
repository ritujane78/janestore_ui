import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faTags,
  faSun,
  faMoon,
  faAngleDown,
  faL,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { selectTotalQuantity } from "../store/cart-slice.js";
import { useSelector, useDispatch } from "react-redux";
import { selectUser,selectIsAuthenticated, logout } from "../store/auth-slice.js";
import { toast } from "react-toastify";

function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });
  const userMenuRef = useRef();
  const navigate = useNavigate();
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isAdminMenuOpen, setAdminMenuOpen] = useState(false);
  
  const toggleAdminMenu = () => setAdminMenuOpen((prev) => !prev);
  const toggleUserMenu = () => setUserMenuOpen((prev) => !prev);
  
  
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAdmin = user?.roles?.includes("ROLE_ADMIN");
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectTotalQuantity);

  useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      setAdminMenuOpen(false);
      setUserMenuOpen(false);
      const handleClickOutside = (event) => {
        if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
          setUserMenuOpen(false);
          setAdminMenuOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    }, [theme, location.pathname]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logout());
      toast.success("Logged out successfully!");
      navigate("/");
    };

  const navLinkClass =
    "text-center text-lg font-primary font-semibold text-primary dark:text-light hover:text-dark dark:hover:text-lighter";

  const dropdownLinkClass =
    "block w-full text-left px-4 py-2 text-lg font-primary font-semibold text-primary dark:text-light hover:bg-gray-100 dark:hover:bg-gray-600";

  return (
    <header className="border-b border-gray-300 dark:border-gray-600 sticky top-0 z-20 bg-normalbg dark:bg-darkbg">
      <div className="flex items-center justify-between mx-auto max-w-[1152px] px-6 py-4">
        <NavLink to="/" className={navLinkClass}>
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span className="font-bold">Jane Stickers</span>
        </NavLink>

        <nav className="flex items-center py-2 z-10">
          <button
            className="flex items-center justify-center mx-3 w-8 h-8 rounded-full border border-primary dark:border-light transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <FontAwesomeIcon
              icon={theme === "dark" ? faMoon : faSun}
              className="w-4 h-4 dark:text-light text-primary"
            />
          </button>

          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline " + navLinkClass : navLinkClass
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "underline " + navLinkClass : navLinkClass
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "underline " + navLinkClass : navLinkClass
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              {isAuthenticated ? (
                <div className="relative" ref = {userMenuRef}>
                  <button onClick = {toggleUserMenu} className={navLinkClass}>
                    {`Hello ${
                      user.name.length > 5?
                      `${user.name.slice(0,5)}...` : user.name
                    }`}
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="ml-1 h-4 w-4"
                    />
                  </button>
                  {
                    isUserMenuOpen && (
                      <div className="absolute right-0 z-30 mt-2 w-48 rounded-md border border-gray-300 bg-normalbg shadow-lg dark:border-gray-600 dark:bg-darkbg">
                    <ul className="py-2">
                      <li>
                        <Link to="/profile" className={dropdownLinkClass}>
                          Profile
                        </Link>
                      </li>

                      <li>
                        <Link to="/orders" className={dropdownLinkClass}>
                          Orders
                        </Link>
                      </li>
                      {
                        isAdmin && (
                        <li>
                          <button
                            type="button"
                            className={`${dropdownLinkClass} flex items-center justify-between`}
                            onClick={toggleAdminMenu}
                          >
                            Admin
                            <FontAwesomeIcon icon={faAngleDown} />
                          </button>
                          {
                            isAdminMenuOpen && (
                              <ul className="ml-4 border-l border-gray-300 dark:border-gray-600">
                                <li>
                                  <Link
                                    to="/admin/orders"
                                    className={dropdownLinkClass}
                                  >
                                    Orders
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    to="/admin/messages"
                                    className={dropdownLinkClass}
                                  >
                                    Messages
                                  </Link>
                                </li>
                            </ul>
                            )
                          }

                          
                        </li>
                        )
                      }


                      <li>
                        <button
                          type="button"
                          className={dropdownLinkClass}
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                    )
                  }
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? `underline ${navLinkClass}` : navLinkClass
                  }
                >
                  Login
                </NavLink>
              )}
            </li>

            <li>
              <NavLink to="/cart" className="relative py-2 text-primary">
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  className="text-primary dark:text-light w-6"
                />

                <div className="absolute -top-2 -right-6 text-xs bg-yellow-400 text-black font-semibold rounded-full px-2 py-1 leading-none">
                  {totalQuantity}
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;