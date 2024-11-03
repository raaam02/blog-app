import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          My Blog
        </Link>
        <div>
          <Link
            to="/create"
            className="text-white hover:bg-blue-500 px-3 py-2 rounded transition-colors duration-200"
          >
            Create Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
