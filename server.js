var express = require("express");
var bodyParser = require ("body-parser");
var logger = require("morgan");
var exphbs = require("express-handlebars");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());