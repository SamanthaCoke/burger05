var express = require("express");
var bodyParser = require ("body-parser");
var logger = require("morgan");
var exphbs = require("express-handlebars");

var routes = require("./controllers/burger_controller");
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static('public'))



app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(logger("dev"));


var exhb = require("express-handlebars");

app.engine("handlebars", exhb({defaultLayout: 'main'}))
app.set('view engine', "handlebars")
app.use(routes);

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
})