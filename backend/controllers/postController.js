const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Ensure that the image file exists
    if (!req.file) {
      return res.status(400).json({ error: "Image upload failed" });
    }

    // Create a new post instance
    const post = new Post({
      title,
      content,
      image: req.file.path, // Save the image path
    });

    // Save the post to the database
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error.message);
    res.status(500).json({ error: "Failed to create post" });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete post" });
  }
};
