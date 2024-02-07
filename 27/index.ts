import inquirer from "inquirer";

async function alienColour() {
  const alienColour = await inquirer.prompt({
    type: "list",
    name: "alienColour",
    message: "Choose an alien colour",
    choices: ["Green", "Yellow", "Red"],
  });

  if (alienColour.alienColour === "Green") {
    console.log("You earned 5 points!");
  } else if (alienColour.alienColour === "Yellow") {
    console.log("You earned 10 points!");
  } else if (alienColour.alienColour === "Red") {
    console.log("You earned 15 points!");
  }
}
alienColour();
