// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const pageReadme = generateMarkdown(title, purpose, technology, developer);
const [title, purpose, technology, developer] = profileDataArgs;

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "purpose",
      message: "What is your project purpose?",
    },
    {
      type: "checkbox",
      name: "technology",
      message: "What technologies did you use?:",
      choices: [
        "JavaScript",
        "HTML",
        "CSS",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Node",
      ],
    },
    {
      type: "input",
      name: "developer",
      message: "Who worked on developing this project?:",
    },
    {
      type: "input",
      name: "link",
      message: "Enter the GitHub link to your project. (Required)",
    },
  ]);
};

// TODO: Create a function to write README file
fs.writeFile("README.md", pageReadme, (err) => {
  if (err) throw err;

  console.log("Readme complete! Check out README.md to see the output!");
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptUser()
  .then(answers => console.log(answers))
