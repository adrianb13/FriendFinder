var friends = require("./../data/friends.js");

var express = require("express");
var app = express();
var router = express.Router();

    router.get("/api/friends", function(req, res) {
        return res.json(friends.friendsList());
    });

    router.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friends.friendsList(newFriend);
        res.json(friends.friendsList());
    });

module.exports = router;
