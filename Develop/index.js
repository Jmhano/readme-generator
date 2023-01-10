// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const profileDataArgs = process.argv.slice(2, process.argv.length);

const [title, purpose, technology, developer] = profileDataArgs;

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
fs.writeFile(
  "README.md",
  generateMarkdown(title, purpose, technology, developer),
  (err) => {
    if (err) throw err;

    console.log("Readme complete! Check out README.md to see the output!");
  }
);
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
