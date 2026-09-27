import  { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaRegCommentDots
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext";
import LoginModal from "./LoginModal";

function Navbar({ onInquiry }) {
  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth();

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav
        className="
          sticky
          top-0
          z-40
          bg-white/95
          dark:bg-gray-900/95
          backdrop-blur-md
          border-b
          border-gray-200
          dark:border-gray-800
          shadow-sm
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            h-16
            flex
            items-center
            justify-between
          "
        >
          {/* Brand */}
          <Link
            to="/"
            className="
              flex
              items-center
              gap-2
              text-xl
              sm:text-2xl
              font-bold
              text-gray-900
              dark:text-white
              hover:text-orange-500
              dark:hover:text-orange-400
              transition-colors
            "
          >
            <span
              className="
                inline-flex
                items-center
                justify-center
                w-9
                h-9
                rounded-xl
                bg-gradient-to-r
                from-orange-500
                to-amber-400
                text-white
                shadow-sm
              "
            >
              P
            </span>

            <span className="hidden sm:inline">
              Prasthanam Tours
            </span>
          </Link>

          {/* Right section */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Login / User */}
            {!isAuthenticated ? (
              <button
                onClick={() => setShowLogin(true)}
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-lg
                  text-sm
                  font-medium
                  text-gray-700
                  dark:text-gray-200
                  hover:bg-gray-100
                  dark:hover:bg-gray-800
                  transition-colors
                "
              >
                <FaSignInAlt size={18} />
                <span className="hidden sm:inline">
                  Login
                </span>
              </button>
            ) : (
              <div
                className="
                  hidden
                  md:flex
                  items-center
                  gap-2
                  px-3
                  py-2
                  rounded-lg
                  bg-gray-100
                  dark:bg-gray-800
                "
              >
                <FaUser 
                  size={17}
                  className="text-orange-500"
                />

                <span
                  className="
                    text-sm
                    font-medium
                    text-gray-700
                    dark:text-gray-200
                  "
                >
                  Hi, {user?.username}
                </span>
              </div>
            )}

            {/* Inquiry */}
            <button
              onClick={onInquiry}
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-lg
                bg-orange-500
                hover:bg-orange-600
                text-white
                text-sm
                font-medium
                shadow-sm
                transition-all
                hover:shadow-md
              "
            >
              <FaRegCommentDots size={18} />

              <span className="hidden sm:inline">
                Inquiry
              </span>
            </button>

            {/* Logout */}
            {isAuthenticated && (
              <button
                onClick={logout}
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-lg
                  border
                  border-red-200
                  dark:border-red-800
                  text-red-600
                  dark:text-red-400
                  hover:bg-red-50
                  dark:hover:bg-red-950/30
                  text-sm
                  font-medium
                  transition-colors
                "
              >
                <FaSignOutAlt  size={18} />

                <span className="hidden sm:inline">
                  Logout
                </span>
              </button>
            )}

            {/* Existing theme button can remain here */}
            {/* Example:
            <ThemeToggle />
            */}
          </div>
        </div>
      </nav>

      {/* Login modal */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
        />
      )}
    </>
  );
}

export default Navbar;