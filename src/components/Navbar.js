import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import AdminLogin from "./AdminLogin";
import { Link } from "react-router-dom";

function Navbar({ onInquiry, onAddPackage }) {
    const { isAdmin, logout } = useAuth();
    const [showLogin, setShowLogin] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="dark:bg-gray-900 shadow-md px-6 py-3 flex items-center justify-between">
            {/* Left side: Brand text */}
            <div className="flex items-center space-x-2">
                <Link
                    to="/"
                    className="flex items-center space-x-2 group"                >
                    <span className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-orange-500 transition-colors duration-300">
                        Prasthanam Tours
                    </span>
                </Link>
            </div>

            {/* Right side nav links */}
            <div className="flex items-center space-x-4">
                {!isAdmin ? (

                    <button
                        onClick={() => setShowLogin(true)}
                        className="text-gray-700 dark:text-gray-300 hover:text-orange-500 font-medium"
                    >
                        Admin
                    </button>

                ) : (

                    <button
                        onClick={logout}
                        className="text-green-600 font-semibold"
                    >
                        Logout
                    </button>

                )}
                {/* Inquiry button */}
                <button
                    onClick={onInquiry}
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500 font-medium"
                >
                    Inquiry
                </button>

                {/* Theme toggle */}
                <button
                    onClick={toggleTheme}
                    className="flex items-center bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
                >
                    <span className="mr-2 text-gray-700 dark:text-gray-300">
                        {theme === "dark" ? "Light" : "Dark"}
                    </span>
                    {theme === "dark" ? (
                        <FaSun className="text-yellow-400" />
                    ) : (
                        <FaMoon className="text-blue-600" />
                    )}
                </button>
            </div>
            {showLogin && (
                <AdminLogin
                    onClose={() => setShowLogin(false)}
                />
            )}
        </nav>
    );
}

export default Navbar;
