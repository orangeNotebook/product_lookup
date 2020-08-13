const express = require("express");
import * as path from "path";
import search from "./index";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.render("index", {
    title: "title be like",
    message: "H1 BE LIKE",
  });
});

app.get("/product/:word", (req, res) => {
  res.send(search(req.params.word));
});

app.set("title", "Product Finder");

app.set("view engine", "pug");
app.set("views", "./out/views");

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
