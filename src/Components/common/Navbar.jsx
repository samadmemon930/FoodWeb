// src/components/common/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { user, logout } = useAuth();

  const links = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
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

            <div className="hidden lg:flex items-center space-x-8">
  {links.map((link) => (
    <div key={link.name} className="relative group">
      <Link
        to={link.path}
        className="text-gray-700 text-[16px] font-medium transition-all duration-300
                   hover:text-orange-600 focus:text-orange-600 active:text-orange-600"
      >
        {link.name}
      </Link>
      <span
        className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300
                   group-hover:w-full group-focus:w-full active:w-full"
      ></span>
    </div>
  ))}
</div>
            {/* RIGHT SIDE */}
            <div className="flex items-center gap-1 md:gap-2">

              {/* DESKTOP SEARCH */}
              <div className="relative hidden sm:flex items-center h-10">
                <input
                  type="text"
                  placeholder="Search food..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-10 pl-9 pr-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />
                <svg
                  className="w-4 h-4 absolute left-3 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </div>

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

              <div className="hidden sm:flex items-center">
                {user ? (
                  <button
                    onClick={logout}
                    className="h-10 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-[16px] font-medium shadow-md transform transition duration-200 hover:scale-105 focus:scale-105 active:scale-105"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="h-10 px-4 flex items-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-[16px] font-medium shadow-md transform transition duration-200 hover:scale-105 focus:scale-105 active:scale-105"
                  >
                    Login
                  </Link>
                )}
              </div>

              {/* MOBILE SEARCH BUTTON */}
              <button
                className="sm:hidden flex items-center justify-center h-10 w-10 rounded-md transition-colors duration-300 hover:text-orange-600 active:text-orange-600"
                onClick={() => setSearchOpen(!searchOpen)}
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
                    d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </button>

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

        {/* MOBILE SEARCH BOX */}
        {searchOpen && (
          <div className="sm:hidden px-4 py-2 border-b border-gray-100 bg-white">
            <input
              type="text"
              placeholder="Search food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-3 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>
        )}

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">



              {/* Links */}
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="block text-[16px] font-medium text-gray-700 transition-colors duration-300 hover:text-orange-600 active:text-orange-600"
                >
                  {link.name}
                </Link>
              ))}
              {/* LOGIN / LOGOUT */}
              <div>
                {user ? (
                  <button
                    onClick={logout}
                    className="w-full h-10 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-[16px] font-medium shadow-md transform transition duration-300 hover:scale-105 active:scale-95"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="w-full h-10 px-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-[16px] font-medium shadow-md transform transition duration-300 hover:scale-105 active:scale-95"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;