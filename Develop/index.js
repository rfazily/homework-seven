const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the Project Title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of this project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "list",
        name: "license",
        message: "The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use https://choosealicense.com/",
        choices: ["MIT", "Github", "Apache", "GPL", "None"]
    },
    {
        type: "input",
        name: "contributors",
        message: "What are your guidelines for contributors?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the github email address?"
    }
];

//ADD ADDITIONAL QUESTION REGARDING USERNAME TO THAT PROFILE PIC AND REPO FIELDS WORK

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
    })
  }
init();