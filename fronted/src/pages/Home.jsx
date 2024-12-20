import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../api/postApi";
import Button from "../components/Button";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(data => setPosts(data));
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-blue-100 mb-8">Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post._id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-shadow duration-300">
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
                  <div 
                  className="mt-4 text-gray-600 dark:hover:text-gray-300 dark:text-gray-100" 
                  dangerouslySetInnerHTML={{ __html: `${post.content.slice(0, 150)}....` }}
                  >
                  </div>
                </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/create">
          <Button title={'Create Blog'} color={'blue'} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
