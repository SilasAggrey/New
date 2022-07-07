const express = require("express");

const server = express();

const handleHomeRequest = (request, response) => {
  response.send("<h1>Home page</h1>");
};

const handleProfileRequest = (request, response) => {
  response.send("<h1>Profile page</h1>");
};

const handleAboutRequest = (request, response) => {
  response.send("<h1>About page</h1>");
};

const handleSettingRequest = (request, response) => {
    response.send("<h1>Settings page</h1>");
  };


server.use("/setting", handleSettingRequest);
server.use("/about", handleAboutRequest);
server.use("/profile", handleProfileRequest);
server.use("/", handleHomeRequest);

server.listen(3000, () => console.log("server running on port 3000"));