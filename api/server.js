const express = require("express");
// const recRouter = require("../recipes/recipe-router.js");
const server = express();

server.use(express.json());
// server.use("/api", router);

server.use("/", (req, res) => {
  res.json("Your API is up and running!!");
});

module.exports = server;
