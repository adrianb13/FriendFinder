var Friends = require("./../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.send("hello")
//        return res.json(Friends.friends);
    });

    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;
        currentFriends.push(newFriend);
        res.json(currentFriends);

    });

}