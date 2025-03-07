// IMPORT DB
const connection = require("../data/db");

// INDEX
function index(req, res) {
  // QUERY
  const showPosts = `SELECT * FROM posts`;

  // Execute QUERY
  connection.query(showPosts, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    if (results.length === 0)
      return res.status(404).json({ error: "Posts List is Empty" });
    // Send RES
    res.json(results);
  });
}

// SHOW
function show(req, res) {}

// STORE
function store(req, res) {}

// UPDATE
function update(req, res) {}

// MODIFY
function modify(req, res) {}

// DESTROY
function destroy(req, res) {}

// EXPORT Functions
module.exports = { index, show, store, update, modify, destroy };
