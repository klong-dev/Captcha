const express = require("express");
const path = require("path");
const routes = require("./routes");
const bodyParser = require("body-parser");

require('dotenv').config();

const db = require("./config/db");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.set("views", path.join(__dirname, "resources", "views"));

app.use(express.static(path.join(__dirname, "public")));
db.connect();
routes(app);

app.get("/", (req, res) => {
  res.sendFile('index.html');
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT || 3000}`);
});
