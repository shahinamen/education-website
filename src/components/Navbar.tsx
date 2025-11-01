import { Camera } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Academics", path: "/academics" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Camera />
            <span className="text-lg font-semibold text-slate-900">
              Universal
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-indigo-600 font-medium"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Enroll Button */}
          <div className="hidden md:block">
            <Link
              to="/enroll"
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-md"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-[max-height] duration-300 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-4 bg-white border-t">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2 text-base ${
                location.pathname === item.path
                  ? "text-indigo-600 font-medium"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/enroll"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Enroll Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
