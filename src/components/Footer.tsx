import { BookOpen } from "lucide-react";
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
            <p className="text-sm text-gray-400">
              We are a company dedicated to providing the best solutions for
              your needs. Our mission is to deliver quality and excellence in
              every project.
            </p>
          </div>

          {/* Links Section */}
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Important Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Important Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Policy */}
            <div>
              <h3 className="text-white font-semibold mb-4">Policy</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white font-semibold mb-4">Social Media</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 text-center text-gray-500 border-t mt-4">
        © {new Date().getFullYear()} Universal. All rights reserved.
      </div>
    </footer>
  );
}
