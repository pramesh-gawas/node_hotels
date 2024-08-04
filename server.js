const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

app.get("/", (req, res) => {
  console.log("welcome to our hotel");
});

//person routes
const personRouter = require("./routes/personRoutes");
app.use("/person", personRouter);

//menu routes
const menuRouter = require("./routes/menuRoutes");
app.use("/menu", menuRouter);

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
