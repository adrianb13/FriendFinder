
var currentFriends = [
    {
    "name": "Tom",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/220px-Tom_Hardy_by_Gage_Skidmore.jpg",
    "scores": [
        2,
        2,
        3,
        1,
        3,
        1,
        2,
        3,
        2,
        3
        ]
    },
    {
    "name": "Katie",
    "photo": "https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2017/08/gettyimages-696065416_-_h_2017.jpg",
    "scores": [
        3,
        4,
        4,
        5,
        5,
        4,
        5,
        4,
        4,
        5
        ]
    },
    {
    "name": "James",
    "photo": "https://www.biography.com/.image/t_share/MTI5MjMwMzk2NDA2NjY3NzQy/james-corden-shutterstock_214425070_600x600jpg.jpg",
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
    "name": "Rachel",
    "photo": "https://cdnph.upi.com/svc/sv/upi/1331543422647/2018/1/693d7ae2327ca88756b94be902e9a168/Rachel-McAdams-says-motherhood-is-the-greatest-thing.jpg",
    "scores": [
        4,
        4,
        5,
        2,
        4,
        3,
        4,
        5,
        3,
        4
        ]
    },
    {
    "name": "Rick",
    "photo": "http://rsuradio.com/wp-content/uploads/2016/10/Rick-Astley-640x360.jpg",
    "scores": [
        1,
        2,
        2,
        2,
        1,
        1,
        1,
        3,
        2,
        1
        ]
    },
    {
    "name": "Amanda",
    "photo": "https://www.hellomagazine.com/imagenes/celebrities/2018090461883/amanda-holden-shares-kids-back-to-school-photos/0-293-758/amanda-holden-bgt-t.jpg",
    "scores": [
        1,
        4,
        4,
        2,
        3,
        4,
        2,
        3,
        3,
        2
        ]
    }
];

function scores (){
    var scoreSum = 0;
        sumList = [];    
    for (i = 0; i < currentFriends.length; i++) {
        currentFriends[i].scores;
        for (j=0; j < currentFriends[i].scores.length; j++) {
            scoreSum += currentFriends[i].scores[j];
        }
        sumList.push(scoreSum);
        scoreSum = 0;
    }
};

function friendsList (newFriend) {
    if (newFriend) {
    currentFriends.push(newFriend);
    }
    return currentFriends;
}

module.exports.friendsList = friendsList