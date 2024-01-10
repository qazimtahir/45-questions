console.log("Q 16.\nMore Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.\n\u2022 Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.\n\n\u2022 Add one new guest to the beginning of your array.\n\n\u2022 Add one new guest to the middle of your array. \u2022 Use append() to add one new guest to the end of your list. \u2022 Print a new set of invitation messages, one for each person in your list.\n\nFollowing friends were present in the last invitation.\n1. Tahir \n2. Tariq\n3. Talha\nAfter inviting 3 new friends, the list is as under:\n");
var myFriends = ["Tahir", "Tariq", "Talha"];
myFriends.unshift("Zafar");
myFriends.splice(2, 0, "Akram");
myFriends.push("Sarwar");
console.log(myFriends);
/*
myFriends.splice(3, 0, "Zafar", "Sarwar", "Iqbal");
console.log(myFriends);
for (let i = 3; i < myFriends.length; i++) {
  console.log(
    `AOA. Dear friend Mr. ${myFriends[i]}, you are invited in today's dinner party on Yasir Broast.`
  );
}*/
