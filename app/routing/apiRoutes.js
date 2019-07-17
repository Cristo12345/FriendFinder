// importing our array of friends from the friends.js file
var friendsData = require("../data/friends");

// We will do the API Routing here
module.exports = function(app) {

    // api route to display all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // survery results and logic for finding compatible friend
    app.post("/api/friends", function(req, res) {
        friendsData.push
    })
};