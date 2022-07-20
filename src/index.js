const express = require("express");
const server = express();

const handleAllTypesOfRequests = (req,res) => {
  res.send("Response from server.use")
}

const handleProfilePutRequestType =(req,res)=> {
    res.send("Responded to profile request with method of value put");
}

const handleLoginDeleteRequestType =(req,res)=> {
    res.send("Responded to login request with method of value delete");
}

const handleProfileDeleteRequestType =(req,res)=> {
    res.send("A responds to profile request with method of value delete");
}

server.post("/profile", handleAllTypesOfRequests);
server.put("/profile", handleProfilePutRequestType);
server.get("/profile", (req,res) => res.send("Hello, this is a profile page using get method"));
server.patch("/profile", (req,res) => res.send("Hello, this is a profile page using patch method"));
server.delete("/profile", handleProfileDeleteRequestType);

server.get("/login", (req,res) => res.send("Hello, this is a login page"));
server.delete("/login", handleLoginDeleteRequestType);
server.put("/login", (req,res) => res.send("Hello, this is a login page using put method" ));
server.patch("/login", (req,res) => res.send("Hello, this is a login page using patch method"));
server.post("/login", (req,res) => res.send("Hello, this is a login page using the patch method"));

server.patch("/signup", (req,res) => res.send("Hello, this is a login page with method value patch"));


server.listen(3000, () => console.log("server is ready"));