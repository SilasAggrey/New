const express = require("express");
const {
  getPostsController,
  postPostsController,
} = require("./controllers/postsController");

const server = express();

server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

server.get("/posts", getPostsController);
server.post("/posts", postPostsController);
server.patch("/posts", postPostsController);
server.delete("/posts", postPostsController);
server.put("/posts", postPostsController);

server.listen(3000, () => {
  console.log("server running on port 3000");
});