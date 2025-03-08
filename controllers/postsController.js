// IMPORT DB
const connection = require("../data/db");

// INDEX
function index(req, res) {
  // QUERY
  const showPosts = `SELECT * FROM posts`;
  const showTags = `
  SELECT tags.*, post_tag.post_id
  FROM tags
  JOIN post_tag ON tags.id = post_tag.tag_id`;

  // Execute QUERY that prints every Post
  connection.query(showPosts, (err, postsResults) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    if (postsResults.length === 0)
      return res.status(404).json({ error: "Posts List is Empty" });

    connection.query(showTags, (err, tagsResults) => {
      if (err) return res.status(500).json({ error: "Database query failed" });

      // New Array with postsResults + tags property
      const fullPosts = postsResults.map((post) => {
        const tagsCopy = tagsResults
          // If post_id === post.id then put in tags property the tagsCopy array of objects
          .filter((tag) => tag.post_id === post.id)
          // keeps in tagsCopy label and id of each tag
          .map((tag) => ({ id: tag.id, label: tag.label }));

        return {
          ...post,
          tags: tagsCopy,
        };
      });

      // Send RES
      res.json(fullPosts);
    });
  });
}

// SHOW
function show(req, res) {
  // GET ID from URL
  const id = req.params.id;
  // QUERY
  const showPost = `SELECT * FROM posts WHERE id = ?`;
  const showTags = `
   SELECT tags.*
   FROM tags 
   JOIN post_tag ON post_tag.tag_id = tags.id 
   WHERE post_tag.post_id = ?`;

  // Execute QUERY that removes a post using the id
  connection.query(showPost, [id], (err, postResults) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    if (postResults.length === 0)
      return res.status(404).json({ error: "Post not found" });

    // Save Post
    const post = postResults[0];

    // Execute Query that shows the tags of a single post
    connection.query(showTags, [id], (err, tagsResults) => {
      if (err) return res.status(500).json({ error: "Database query failed" });

      // Add tags to Post Object
      post.tags = tagsResults;

      // Send RES
      res.json(post);
    });
  });
}

// STORE
function store(req, res) {}

// UPDATE
function update(req, res) {}

// MODIFY
function modify(req, res) {}

// DESTROY
function destroy(req, res) {
  // GET ID from URL
  const id = req.params.id;
  // QUERY
  const destroyPost = `DELETE FROM posts WHERE id = ?`;

  // Execute QUERY that removes a post using the id
  connection.query(destroyPost, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    if (!results.affectedRows)
      return res.status(404).json({ error: "Post not found" });

    //RETURN STATUS
    res.sendStatus(204);
  });
}

// EXPORT Functions
module.exports = { index, show, store, update, modify, destroy };
