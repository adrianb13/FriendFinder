var Friends = require("./../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(currentFriends);
    });

    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;
        currentFriends.push(newFriend);
        res.json(currentFriends);

    });

}