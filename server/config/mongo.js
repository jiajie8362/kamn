var mongoose = require('mongoose');
var config = require('./config');

// Connect to database

mongoose.connect(config.mongo.url);
console.log('Connect to ' + config.mongo.url);