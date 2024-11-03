import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../api/postApi";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(data => setPosts(data));
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post._id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Link to={`/posts/${post._id}`}>
              {post.image && (
                  <img
                    src={`http://localhost:5001/${post.image}`}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-md mb-4"
                  />
                )}
                <div className="p-3 pt-0">
                  <h2 className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200">{post.title}</h2>
                  <p className="mt-4 text-gray-600">
                    {post.content.slice(0, 100)}...<span className="text-blue-700 hover:text-blue-900">read more</span>
                  </p>
                </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          to="/create"
          className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:outline-none focus:ring-1 focus:ring-blue-700 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transition duration-200"
        >
          Create New Post
        </Link>
      </div>
    </div>
  );
};

export default Home;
