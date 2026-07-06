import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-300">
        Prasthanam Tours
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/inquiry" className="text-gray-700 dark:text-gray-200 hover:underline">
          Inquiry
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
