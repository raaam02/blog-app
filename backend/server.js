require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const postRoutes = require("./routes/postRoutes");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
