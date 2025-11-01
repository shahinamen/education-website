import {
  Book,
  BookAlert,
  BookOpen,
  BookOpenCheck,
  Contact,
  Home,
  Notebook,
  Settings,
  User,
  Waypoints,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-10 md:space-y-0">
          {/* Logo and About Us */}
          <div className="md:w-1/4">
            <div className="mb-4">
              <Link to="/" className="flex items-center gap-2">
                <BookOpen className="text-orange-600" />
                <span className="text-lg font-semibold text-orange-600">
                  Universal
                </span>
              </Link>
            </div>
            <p className="text-sm text-white">
              We are a company dedicated to providing the best solutions for
              your needs. Our mission is to deliver quality and excellence in
              every project.
            </p>
          </div>

          {/* Links Section */}
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Important Links */}
            <div>
              <h3 className="text-orange-600 font-semibold mb-4">
                Important Links
              </h3>
              <ul className="space-y-2 text-medium text-white">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-600 flex items-center"
                  >
                    <Home size={24} className="pr-2" />
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-600 flex items-center"
                  >
                    <Settings size={24} className="pr-2" />
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-600 flex items-center"
                  >
                    <User size={24} className="pr-2" />
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-600 flex items-center"
                  >
                    <Contact size={24} className="pr-2" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Policy */}
            <div>
              <h3 className="text-orange-600 font-semibold mb-4">Policy</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-600  flex items-center"
                  >
                    <BookOpenCheck size={24} className="pr-2" />
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-600  flex items-center"
                  >
                    <BookAlert size={24} className="pr-2" />
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-600  flex items-center"
                  >
                    <Book size={24} className="pr-2" />
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-600  flex items-center"
                  >
                    <Notebook size={24} className="pr-2" />
                    Usage Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-orange-600 font-semibold mb-4">
                Social Media
              </h3>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-600  flex items-center"
                  >
                    <Waypoints size={24} className="pr-2" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-600  flex items-center"
                  >
                    <Waypoints size={24} className="pr-2" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-600  flex items-center"
                  >
                    <Waypoints size={24} className="pr-2" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-600  flex items-center"
                  >
                    <Waypoints size={24} className="pr-2" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 text-center text-gray-500 border-t border-orange-600 mt-4">
        © {new Date().getFullYear()} Universal. All rights reserved.
      </div>
    </footer>
  );
}
