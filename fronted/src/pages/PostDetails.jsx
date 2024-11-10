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
            <Link to={`/edit/${id}`}>
              <Button title={<><FontAwesomeIcon icon={faPenToSquare} className="mr-2" /><span className="hidden sm:inline-block">Edit</span></>} color={'yellow'} />
            </Link>
            <Button
              title={<><FontAwesomeIcon icon={faTrash} className="mr-2" /><span className="hidden sm:inline-block">Delete</span></>}
              color={'red'}
              onClick={handleDelete}
            >
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
