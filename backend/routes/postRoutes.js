const express = require("express");
const multer = require("multer");
const { createPost, getPosts, getPostById, deletePost, updatePost } = require("../controllers/postController");

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);   
    }
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), createPost);
router.get("/", getPosts);
router.get("/:id", getPostById);
router.delete("/:id", deletePost);
router.put("/:id", upload.single("image"), updatePost);

module.exports = router;
