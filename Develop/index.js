const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile)

function promptUser(){
   return inquirer.prompt([
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
        type: "input",
        name: "license",
        message: "The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use https://choosealicense.com/"
    },
    {
        type: "input",
        name: "contributors",
        message: "What are your guidelines for contributors?"
    },
    {
        type: "input",
        name: "profilepic",
        message: "Insert your profile pic"
    },
    {
        type: "input",
        name: "email",
        message: "What is the github email address?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the github email address?",
        validate: function( value ) {
            if (value.length) {
              return true;
            } else {
              return 'Please enter your username or e-mail address.';
            }
          }
    }
]);       

function generateTXT(answers) {
    return `
## Project Title
${title}

## Description
${description}

## Table of Contents

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributors
${contributors}

## GitHub Profile Picture
${profilepic}

## GitHub Email
${email}`;
}

// const run = async () => {
//     const credentials = await inquirer.askGithubCredentials();
//     console.log(credentials);
//   };
  
//   run();

async function init() {
    console.log("Good README generator: please answer the questions below to create the file:")
    try {

     const answers = await inquirer.askGithubCredentials();
      const answers = await promptUser();
  
      const txt = generateTXT(answers);
  
      await writeFileAsync("README.txt", txt);
  
      console.log("Successfully created your README.txt file");
    } catch(err) {
      console.log(err);
    }
  }

  init();