const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config;

const app = express();

// CORS OPTIONS

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
const productsRoute = require("./routes/Product");

app.use("/products", productsRoute);

//connection to mongoDB

mongoose.connect(`${process.env.DB_CONNECTION}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = 3002;

app.listen(port, () => {
  console.log("Listening to port: ", port);
});
