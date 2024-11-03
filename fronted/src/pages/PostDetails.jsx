import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchPostById, deletePost } from "../api/postApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowLeft, faHome, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";


const PostDetails = () => {
  const { id } = useParams(); // Get the post ID from the URL
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
      navigate("/"); // Redirect to home after deletion
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (!post) return <div className="text-center">Loading...</div>;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        {post.image && (
          <img
            src={`http://localhost:5001/${post.image}`}
            alt={post.title}
            className="w-full max-h-96 object-cover rounded-md mb-4"
          />
        )}
        <p className="text-gray-600 mb-6">{post.content}</p>

        <div className="flex justify-between items-center mt-8">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
            </Link>

          </Link>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-colors duration-200 flex items-center"
          >
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
