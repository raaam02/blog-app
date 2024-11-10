import React, { useEffect, useRef, useState } from "react";
import { createPost } from "../api/postApi";
import { useNavigate } from "react-router-dom";
import EditorJS from "@editorjs/editorjs";
import Tools from "../components/Tools.editor";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const editorInstance = useRef(null);

  useEffect(() => {
    let editor = new EditorJS({
      holder: "editorjs",
      data: '',
      placeholder: "Write your content here...",
      tools: Tools
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    if (image) formData.append("image", image);

    const content = await editorInstance.current.save();
    formData.append("content", JSON.stringify(content));

    await createPost(formData);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white font-serif dark:bg-gray-900 text-gray-700 dark:text-gray-100 p-3 md:p-8 rounded-lg shadow-md w-full max-w-4xl"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create a New Post
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 text-2xl font-bold dark:bg-gray-800 rounded focus:outline-none"
        />

        <div id="editorjs" className="mb-6 text-gray-700 bg-white dark:bg-gray-800 rounded focus:outline-none"></div>

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
