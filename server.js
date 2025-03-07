// IMPORT Routers
const postsRouter = require("./routers/posts");
// IMPORT Express
const express = require("express");
// Server Base Configuration
const app = express();
const port = 3000;

// MIDDLEWARES
app.use("/posts", postsRouter);

// HomePage
app.get("/", (req, res) => {
  res.send("<h1>Rotta di Partenza</h1>");
});

//Server start (port: 3000)
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
