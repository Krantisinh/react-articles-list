import express from "express";
import { port } from "./config";
import path from "path";
import { serverRender } from "../renderers/server";

const server = express();
server.use(express.static("dist"));

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

const initialContent = serverRender();

server.get("/", (req, res) => {
  res.render("index", { initialContent });
});

server.listen(port, () => console.info(`Running on port: ${port}`));
