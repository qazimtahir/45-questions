console.log("Q 14.\nGuest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you\u2019d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.\n");
console.log("Solution:");
var myFriends = ["Tahir", "Tariq", "Akram"];
for (var i = 0; i < myFriends.length; i++) {
    console.log("Assalam O Alaikum. Dear friend Mr. ".concat(myFriends[i], ", you are invited in today's dinner party on Yasir Broast."));
}
