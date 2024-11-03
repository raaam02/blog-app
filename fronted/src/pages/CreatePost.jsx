import React, { useState } from "react";
import { createPost } from "../api/postApi";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    await createPost(formData);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-3 md:p-8 rounded-lg shadow-md w-full max-w-4xl"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Create a New Post
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-700"
        />

        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          placeholder="Write your content here..."
          className="mb-40 md:mb-20 h-48"
          modules={{
            toolbar: [
              [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
              [{ 'size': [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              [{ 'align': [] }],
              ['link', 'image'],
              ['clean'] 
            ],
          }}
          formats={[
            'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike',
            'blockquote', 'list', 'bullet', 'align', 'link', 'color', 'background'
          ]}
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full mb-4 font-semibold p-2 text-white border border-green-500 rounded-2xl cursor-pointer bg-green-500 dark:text-gray-50 focus:outline-none focus:ring-1 focus:ring-green-800 dark:bg-green-500 dark:border-green-500 dark:placeholder-green-500 hover:bg-green-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-green-700 hover:file:bg-violet-100"
        />

        <button
          type="submit"
          className="w-full px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:outline-none focus:ring-1 focus:ring-blue-700 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transition duration-200"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
