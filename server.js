"use strict";
const express = require('express');

const config = require('./utils/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://Phi-Nguyen:123@cluster1-0toue.mongodb.net/test?retryWrites=true')
mongoose.connection.once('open', () => {
    console.log('connected to database')        
})


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


let port = process.env.PORT || 3000;

let server = app.listen(port, function() {
  console.log('Express server listening on port ' + port)
});
