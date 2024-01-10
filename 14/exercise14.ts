console.log(`Q 14.
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
`);
console.log("Solution:");

let myFriends: string[] = ["Tahir", "Tariq", "Akram"];
for (let i = 0; i < myFriends.length; i++) {
  console.log(
    `Assalam O Alaikum. Dear friend Mr. ${myFriends[i]}, you are invited in today's dinner party on Yasir Broast.`
  );
}
