import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Finder from "./services/finder";
import getData from "./repositories/data-provider";
import models, { connectDb } from "./models";

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const app = express();
const port = 5000;

app.use(
  express.urlencoded({
    extended: true,
  })
);
let finder;

app.get("/menu", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(finder.menu);
});

app.post("/order", (req, res) => {
  console.log("Received");
});

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

// app.post("/product", (req: Request, res: Response) => {
//   let product = search(req.body.plNumber);
//   if (product) {
//     res.render("product", {
//       product: product,
//     });
//   } else {
//     res.send("The product you are looking for was not found");
//   }
// });

app.set("title", "Product Finder");
app.set("view engine", "pug");
app.set("views", "./out/views");

app.use(express.static("public"));

connectDb().then(async () => {
  finder = new Finder();

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
