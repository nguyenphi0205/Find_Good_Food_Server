"use strict";
const express = require("express");

const config = require("./utils/config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
//router
var product = require("./routes/product");
var supplier = require("./routes/suppliersRouter");
var category = require("./routes/categoriesRouter");
var food = require("./routes/foodRouter");
var shipper = require("./routes/shipperRouter");
var news = require("./routes/newsRouter");
var users = require("./routes/userRouter");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Phi-Nguyen:123@cluster1-0toue.mongodb.net/test?retryWrites=true"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/products", product);
app.use("/suppliers", supplier);
app.use("/categories", category);
app.use("/foods", food);
app.use("/shippers", shipper);
app.use("/news", news);
app.use("/users", users);

let port = process.env.PORT || 3000;

let server = app.listen(port, function() {
  console.log("Express server listening on port " + port);
});
