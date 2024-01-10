console.log(`
Q3.
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and title case.
-
Answer:`);

let myName: string = "MUHammad TaHIr IqBAl";
console.log(`default: ${myName}
`);
console.log(`lowercase: ${myName.toLowerCase()}
`);
console.log(`uppperrcase: ${myName.toUpperCase()}
`);

console.log(`
Title Case by function:
`);
function convertToTitleCase(str: string) {
  if (!str) {
    return "";
  }
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
}

console.log(convertToTitleCase(`to title case: ${myName}`));

// Title Case through mapping method:
console.log(`
Title Case by mapping and function:
`);

const myMsg = myName;
function titleCase(msg: string) {
  return msg
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join(" ");
}
console.log(titleCase(myMsg));
console.log("");
