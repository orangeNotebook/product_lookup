const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
  <div>
  <h1>Main Page</h1>
  <br>
  <a href='/root-test/'>CLICK ME</a>
  </div>`);
});

app.get("/root-test/", (req, res) => {
  res.send(`
  <div>
  <p>Nice, you can click a link!, but can you <a href='/car.png'>clik me?</a></p>
  </div>`);
});

app.get("/mirror/:word", (req, res) => {
  res.send(req.params.word);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
