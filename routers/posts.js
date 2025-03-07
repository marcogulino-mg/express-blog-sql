// IMPORT postsController
const postController = require("../controllers/postsController");
// IMPORT Express
const express = require("express");
// Route Handlers Class
const router = express.Router();

// ROUTES (CRUD)

// ROUTE Posts List
router.get("/", postController.index);

// ROUTE Single Post
router.get("/:id", postController.show);

// ROUTE Create New Post
router.post("/", postController.store);

// ROUTE Update Post
router.put("/:id", postController.update);

// ROUTE Modify Post
router.patch("/:id", postController.modify);

// ROUTE Delete Post
router.delete("/:id", postController.destroy);

// EXPORT Router
module.exports = router;
