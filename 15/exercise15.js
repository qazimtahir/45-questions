console.log("Q. 15\nChanging Guest List: You just heard that one of your guests can\u2019t make the dinner, so you need to send out a new set of invitations. You\u2019ll have to think of someone else to invite.\n");
console.log("Solution:");
console.log("\nHere is the list of friends who were invited.");
var myFriends = ["Tahir", "Tariq", "Akram"];
console.log(myFriends);
for (var a = 0; a < myFriends.length; a++) {
    //console.log(`${myFriends[a]}`);
}
var absent = myFriends.pop();
// removed last name from the end.
console.log("".concat(absent, " is not coming. Now remaining friends list is  ").concat(myFriends, "\n  Inviting Talha in the party.\n  Here is the list of friends with new entry.\n  "));
myFriends.push("Talha");
// added Talha at the end.
console.log(myFriends);
console.log("\nSending invitation to all friends.");
for (var i = 0; i < myFriends.length; i++) {
    console.log("Dear friend, ".concat(myFriends[i], ", you are invited in the dinner today."));
}
