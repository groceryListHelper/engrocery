const express = require("express");
const app = express();
const port = 5000;

const bodyParser = require("body-parser");
app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());

app.listen(port, () =>
  console.log(`Grocery List app listening on port ${port}!`)
);
