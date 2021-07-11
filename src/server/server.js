import express from "express";
// import React from "react";
// import ReactDOMServer from "react-dom/server";
// import App from "../app";
import { port } from "./config";
import path from "path";

const server = express();
server.use(express.static("dist"));

server.set("views", path.join(__dirname, "views"));

server.set("view engine", "ejs");
// const initialMarkup = ReactDOMServer.renderToString(<App />);

server.get("/", (req, res) => {
  res.render("index");
});

server.listen(port, () => console.info(`Running on port: ${port}`));
