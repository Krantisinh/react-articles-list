import express from "express";
import { port } from "./config";
import path from "path";

import { serverRender } from "../renderers/server";

import TEST_DATA from "../test-data.json";

const server = express();
server.use(express.static("dist"));

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.get("/", async (req, res) => {
  const { initialContent, initialState } = await serverRender();
  res.render("index", { initialContent, initialState });
});

server.get("/data", (req, res) => {
  res.send(TEST_DATA);
});

server.listen(port, () => console.info(`Running on port: ${port}`));
