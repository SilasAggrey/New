const postsArr = [
    { Title: "Coding", 
    Author: "Silas Aggrey",
    Description: "Codetain"},
  ];
  
  const getPostsController = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(postsArr);
  };
  
  const postPostsController = (req, res) => {
    const newPost = req.body;
    postsArr.push(newPost);
  
    res.send(postsArr);
  };
  
  module.exports = { getPostsController, postPostsController };