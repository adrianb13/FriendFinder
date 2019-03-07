var express = require("express");
var path = require("path");

var jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const { window } = new JSDOM();
    const { document } = (new JSDOM('')).window;
    global.document = document;
var $ = jQuery = require('jquery')(window);

var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var friends = require("./app/data/friends.js");

var app = express();
var PORT = process.env.PORT || 5500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/friends', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static(path.join(__dirname, "./app/public")));
app.use(express.static(path.join(__dirname, "./app/data")));

//app.use(apiRoutes.getFriends);
//app.use(apiRoutes.postFriends);
//app.use(htmlRoutes.getHome);
//app.use(htmlRoutes.getSurvey);
//app.use(friends.submitInfo);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

