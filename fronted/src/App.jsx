import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import Navbar from "./components/Navbar";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <>
    <div className="absolute inset-0 z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Navbar />
        <div className="max-w-6xl mx-auto md:p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
