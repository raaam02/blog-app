import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPostById, updatePost } from "../api/postApi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await fetchPostById(id);
        setTitle(data.title);
        setContent(data.content);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    loadPost();
  }, [id]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      await updatePost(id, formData);
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="min-h-screen md:p-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Edit Post</h1>
        <form onSubmit={handleUpdate}>
          <label className="block mb-2 text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 mb-4 border dark:bg-gray-800 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-700"
          />

          <label className="block mb-2 text-sm font-medium">Content</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            className="w-full mb-24  md:mb-12 h-60"
            theme="snow"
          />

          <label className="block mb-2 text-sm font-medium">Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full mb-4 font-semibold p-2 text-white border border-green-500 rounded-2xl cursor-pointer bg-green-500 dark:text-gray-50 focus:outline-none focus:ring-1 focus:ring-green-800 dark:bg-green-500 dark:border-green-500 dark:placeholder-green-500 hover:bg-green-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-green-700 hover:file:bg-violet-100"
          />

          <button
            type="submit"
            className="w-full px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:outline-none focus:ring-1 focus:ring-blue-700 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transition duration-200"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
