import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchPostById, deletePost } from "../api/postApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHome, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";


const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await fetchPostById(id);
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    getPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deletePost(id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (!post) return <div className="text-center">Loading...</div>;

  return (
    <div className="min-h-screen md:p-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-4">{post.title}</h1>
        {post.image && (
          <img
            src={`http://localhost:5001/${post.image}`}
            alt={post.title}
            className="w-full max-h-96 object-cover dark:border rounded-md mb-4"
          />
        )}
        <div
        className="text-gray-600 dark:text-gray-100 mb-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex justify-between items-center mt-8">
          <Link to="/" 
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </Link>
          <div className="flex items-center gap-4">
            <Link
                to={`/edit/${id}`}
                className="px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-b from-yellow-500 to-yellow-600 text-white focus:outline-none focus:ring-1 focus:ring-yellow-700 hover:from-yellow-600 hover:to-yellow-700 hover:shadow-xl transition duration-200"
                >
                Edit Post
            </Link>
            <button
              onClick={handleDelete}
              className="px-8 sm:px-4 py-2 sm:py-2 rounded-full flex justify-center items-center bg-gradient-to-b from-red-500 to-red-600 text-white focus:outline-none focus:ring-1 focus:ring-red-700 hover:from-red-600 hover:to-red-800 hover:shadow-xl transition duration-200"
            >
              <FontAwesomeIcon icon={faTrash} className="mr-2" />
              <span className="hidden sm:inline-block">Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

