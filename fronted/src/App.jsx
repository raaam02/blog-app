import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import Navbar from "./components/Navbar";
import EditPost from "./pages/EditPost";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-red-100 dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-[linear-gradient(to_right,#e1e5eb_1px,transparent_1px),linear-gradient(to_bottom,#e1e5eb_1px,transparent_1px)] bg-[size:6rem_4rem]">
        {/* <div className="absolute inset-0 z-10 h-full w-full dark:bg-gray-900 dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[linear-gradient(to_right,#e1e5eb_1px,transparent_1px),linear-gradient(to_bottom,#e1e5eb_1px,transparent_1px)] bg-[size:6rem_4rem]"> */}
            <Navbar />
            <div className="max-w-6xl mx-auto md:p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/posts/:id" element={<PostDetails />} />
                <Route path="/edit/:id" element={<EditPost />} />
              </Routes>
            </div>
          {/* </div> */}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
