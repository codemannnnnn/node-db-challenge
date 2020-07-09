const express = require("express");
const projRouter = require("../routers/project-router.js");
const server = express();

server.use(express.json());
server.use("/api/project", projRouter);

server.use("/", (req, res) => {
  res.json("Your API is up and running!!");
});

module.exports = server;
