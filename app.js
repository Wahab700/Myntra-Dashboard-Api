const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

const connectDB = require("./config/db");

// load env variables
dotenv.config({ path: "./config/config.env" });
connectDB();

// Routes
app.use("/", require("./routers/index"));

app.listen(3000, () => {
  console.log("Server is up and running");
});
