var express = require("express");
var path = require("path");

var jsdom = require("jsdom"); 
function parseData(html){
    var {JSDOM} = jsdom;
    var dom = new JSDOM(html);
    var $ = (require('jquery'))(dom.window);
};


var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var friends = require("./app/data/friends.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static(path.join(__dirname, "./app/data")));
app.use(express.static(path.join(__dirname, "./app/public")));
app.use(express.static(path.join(__dirname, "./app/routes")))
app.use(express.static(path.join(__dirname, "./app")));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

