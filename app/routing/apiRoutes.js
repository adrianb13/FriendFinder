var friends = require("./../data/friends");

var express = require("express");
var router = express.Router()

//function getFriends(router) {
    router.get("/api/friends", function(req, res) {
        return res.json(friends.currentFriends);
    });
//}


//function postFriends(router) {
    router.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        currentFriends.push(newFriend);
        res.json(currentFriends);
    });
//}

module.exports = router;
/* {
    getFriends: getFriends,
    postFriends: postFriends
}
 */