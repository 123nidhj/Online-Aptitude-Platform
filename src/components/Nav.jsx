import React from "react";
import { Brain, Menu, X } from "lucide-react";

const Nav = ({
  isLoggedIn,
  setIsLoggedIn,
  setCurrentPage,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage("landing")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aptivise
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => setCurrentPage("landing")} className="text-gray-700 hover:text-blue-600 transition">
              Home
            </button>

            {isLoggedIn && (
              <>
                <button onClick={() => setCurrentPage("dashboard")} className="text-gray-700 hover:text-blue-600 transition">
                  Dashboard
                </button>

                <button onClick={() => setCurrentPage("topics")} className="text-gray-700 hover:text-blue-600 transition">
                  Topics
                </button>
              </>
            )}

            <button className="text-gray-700 hover:text-blue-600 transition">
              About
            </button>

            {!isLoggedIn ? (
              <>
                <button onClick={() => setCurrentPage("signin")} className="text-gray-700 hover:text-blue-600 transition">
                  Sign In
                </button>
                <button
                  onClick={() => setCurrentPage("signup")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
                  Get Started
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-gray-700 hover:text-blue-600 transition">
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
