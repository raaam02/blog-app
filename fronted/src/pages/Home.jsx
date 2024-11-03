import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../api/postApi";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(data => setPosts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Link to={`/posts/${post._id}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200">{post.title}</h2>
              <p className="mt-4 text-gray-600">{post.content.slice(0, 100)}...</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          to="/create"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Create New Post
        </Link>
      </div>
    </div>
  );
};

export default Home;
