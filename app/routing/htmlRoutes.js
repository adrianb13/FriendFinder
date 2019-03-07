var express = require("express");
var router = express.Router();
var path = require("path");

//function getHome (router, path) {
    router.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/home.html"));
    });
//};

//function getSurvey (router, path) {
    router.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/survey.html"));
    });
//};

module.exports = router;
/* {
    getHome: getHome,
    getSurvey: getSurvey
} */