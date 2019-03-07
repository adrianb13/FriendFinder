var jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const { window } = new JSDOM();
    const { document } = (new JSDOM('')).window;
    global.document = document;
var $ = jQuery = require('jquery')(window);

    var currentFriends = [
        {
            "name": "Tom",
            "photo": "",
            "scores": [
                5,
                3,
                4,
                2,
                3,
                5,
                1,
                2,
                4,
                3
            ]
        },
        {
            "name": "Katie",
            "photo": "",
            "scores": [
                3,
                4,
                2,
                5,
                1,
                2,
                3,
                4,
                2,
                5
            ]
        },
        {
            "name": "James",
            "photo": "",
            "scores": [
                2,
                2,
                5,
                3,
                4,
                1,
                4,
                3,
                1,
                5
            ]
        },
        {
            "name": "Lynn",
            "photo": "",
            "scores": [
                4,
                4,
                5,
                2,
                2,
                3,
                1,
                5,
                3,
                2
            ]
        },
        {
            "name": "Rick",
            "photo": "",
            "scores": [
                1,
                3,
                4,
                2,
                5,
                5,
                1,
                3,
                4,
                1
            ]
        },
        {
            "name": "Amanda",
            "photo": "",
            "scores": [
                1,
                5,
                5,
                2,
                3,
                4,
                2,
                3,
                5,
                2
            ]
        }
    ];
    


function submitInfo ($) {
    $(document).on("click", "#submit", function(){
        event.preventDefault();

        var name = $("#name").val().trim();
        var photo = $("#photo").val().trim();
        var scores = [];

        for (i = 1; i < 11; i++) {
            scores.push($("#q" + i).val())
        }
        console.log(scores);

        var newFriend = {
            name: name,
            photo: photo,
            scores: scores
        }
        console.log(newFriend);
        currentFriends.push(newFriend);

        var currentURL = window.location.origin;

        $.post(currentURL + "api/friends", newFriend, function(data) {
            console.log(data);

            $("#name").val("");
            $("#photo").val("");
            for (j = 1; j < 11; j++) {
                $("#q" + j).val("");
            }   
        });
    });
};

module.exports = {
    submitInfo: submitInfo,

    };