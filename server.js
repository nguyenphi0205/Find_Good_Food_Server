"use strict";
const express = require('express');

const config = require('./utils/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
var product = require('./routes/product');
var supplier = require('./routes/suppliersRouter');
var category = require('./routes/categoriesRouter')
var food = require('./routes/foodRouter')

const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://Phi-Nguyen:123@cluster1-0toue.mongodb.net/test?retryWrites=true')
mongoose.connection.once('open', () => {
    console.log('connected to database')        
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/products', product);
app.use('/supplier',supplier);
app.use('/category',category);
app.use('/food',food)

let port = process.env.PORT || 3000;

let server = app.listen(port, function() {
  console.log('Express server listening on port ' + port)
});
