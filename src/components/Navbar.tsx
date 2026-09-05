import { BookOpen } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import settings from "./../lib/settings";

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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-orange-600" />
            <span className="text-lg font-bold text-orange-600">{settings.company_name}</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  location.pathname === item.path
                    ? "font-semibold text-orange-600"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/enroll"
              className="inline-flex items-center rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-700"
            >
              Enroll Now
            </Link>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          >
            <svg
              className="h-6 w-6 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-80" : "max-h-0"}`}>
        <nav className="flex flex-col border-t border-slate-200 bg-white p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2 text-base ${
                location.pathname === item.path
                  ? "font-medium text-orange-600"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/enroll"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex justify-center rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700"
          >
            Enroll Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
