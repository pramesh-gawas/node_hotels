const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");
require("dotenv").config();

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
