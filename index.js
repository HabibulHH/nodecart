const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db/mongoConnect");

const port = 4004;

const app = express();

const index = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.engine("html", require("ejs").renderFile);

app.use(express.static("views"));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/", index);

app.listen(port, function () {
  console.log(`Server started...${port}`);
});
