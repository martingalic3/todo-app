var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var api = require('./routes/index.js');
var database = require('./config/database.js');

mongoose.connect(database.localUrl);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/api/v1', api);

app.listen(port);
console.log("App listening on "+ port);