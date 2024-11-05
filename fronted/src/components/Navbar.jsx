import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext"; // Adjust path as needed

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-transparent p-4 text-blue-700 dark:text-blue-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          My Blog
        </Link>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-2xl text-blue-950 dark:text-yellow-300">
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
          </button>
          <Link
            to="/create"
            className="w-full px-4 md:px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:outline-none focus:ring-1 focus:ring-blue-700 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transition duration-200"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" /> 
            <span className="hidden sm:inline-block">Create Post</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
