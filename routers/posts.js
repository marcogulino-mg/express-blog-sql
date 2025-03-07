// IMPORT postsController
const postController = require("../controllers/postsController");
// IMPORT Express
const express = require("express");
// Route Handlers Class
const router = express.Router();

// ROUTES (CRUD)

// ROUTE Posts List
router.get("/", postController);

// ROUTE Single Post
router.get("/:id", postController);

// ROUTE Create New Post
router.post("/", postController);

// ROUTE Update Post
router.put("/:id", postController);

// ROUTE Modify Post
router.patch("/:id", postController);

// ROUTE Delete Post
router.delete("/:id", postController);

// EXPORT Router
module.exports = router;
