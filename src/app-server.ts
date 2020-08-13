const express = require("express");
import * as path from "path";
import search from "./index";

const app = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/product", (req, res) => {
  let product = search(req.body.plNumber);
  if (product) {
    res.send(product);
  } else {
    res.send("The product you are looking for was not found");
  }
});

app.set("title", "Product Finder");
app.set("view engine", "pug");
app.set("views", "./out/views");

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
