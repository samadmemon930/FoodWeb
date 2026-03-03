// src/components/common/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const links = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/restaurant" },
    { name: "Orders", path: "/orders" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white shadow-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-16">

            {/* LOGO */}
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
            >
              FoodExpress
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex items-center space-x-8">
              {links.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className="nav-link text-gray-700 text-[16px] font-medium transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300"
                  ></span>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-1 md:gap-2">

              {/* CART ICON */}
              <Link
                to="/cart"
                className="relative flex items-center justify-center h-10 w-10 rounded-md transition-colors duration-300 text-gray-700 focus:outline-none focus:text-orange-600 group"
              >
                <svg
                  className="w-6 h-6 text-gray-700 transition-colors duration-300 group-hover:text-orange-600 group-focus:text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 5h12m-6-5v5"
                  />
                </svg>
              </Link>

              <div className="flex items-center">
                {user ? (
                  <button
                    onClick={logout}
                    className="h-10 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-[16px] font-medium shadow-md transform transition duration-300 hover:scale-105 focus:scale-105 active:scale-105"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="h-10 px-4 flex items-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-[16px] font-medium shadow-md transform transition duration-300 hover:scale-105 focus:scale-105 active:scale-105"
                  >
                    Login
                  </Link>
                )}
              </div>

              {/* HAMBURGER */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex items-center justify-center h-10 w-10 rounded-md transition-colors duration-300 hover:text-orange-600 active:text-orange-600"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">

              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="nav-link block text-[16px] font-medium text-gray-700 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}

            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;