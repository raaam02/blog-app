import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4 text-blue-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          My Blog
        </Link>
        <div>
          <Link
            to="/create"
            className="w-full mt-4 px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:outline-none focus:ring-1 focus:ring-blue-700 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transition duration-200"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" /> {/* Icon */}
            Create Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
