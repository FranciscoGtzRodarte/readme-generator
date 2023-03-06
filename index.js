// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generator = require("./utils/generateMarkdown.js");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "Project Title:",
    name: "title",
  },
  {
    type: "input",
    message: "Description:",
    name: "description",
  },
  {
    type: "input",
    message: "Installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage Information:",
    name: "usage",
  },
  {
    type: "input",
    message: "Credits:",
    name: "credits",
  },
  {
    type: "input",
    message: "Contribution guidelines:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Test Instructions:",
    name: "test",
  },
  {
    type: "list",
    message: "Choose a license for my application:",
    name: "license",
    choices: ["Apache 2.0", "MIT License", "GNU GPLv3", "None"],
  },
  {
    type: "input",
    message: "GitHub Username:",
    name: "username",
  },
  {
    type: "input",
    message: "Email:",
    name: "email",
  },
];

// function that writes README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!") //if theres an error will log error otherwise Success
  );
}

// function that initializes the app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    console.log(data.title);

    const userData = generator(data);
    const fileName = "README-generated.md";
    writeToFile(fileName, userData); //calls the function writeTofile with two parameters
  });
}

// Function call to initialize app
init();
