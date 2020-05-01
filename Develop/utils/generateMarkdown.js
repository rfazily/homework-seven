///function for project URL

//we have to run through the values in parenthesis each time in order for the function to know where to gather information from
function projectURL(github, title){
  //split and join added to clean up the characters entered in
  const projectTitle = title.toLowerCase().split("").join("");
  return `https://github.com/${github}/${projectTitle}`
}

//function for renderlisence badge liscence github title
function renderLicense(license, github, title){
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${projectURL(github, title)})`
  }
  return ``
}

function licenseSection(license){
  if (license !== "None") {
    return (`
    This project is licensed under the ${license} license.
    `) 
  }
  return ``
}

//call it genderate markdown 
function generateMarkdown(data) {
  return `
## Github Username
${data.github}

## Project Title
${data.title}
${renderLicense(data.license, data.github, data.title)}
## Description
${data.description}

## Table of Contents

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseSection(data.license)}

## Contributors
${data.contributors}

## GitHub Profile Picture
<img src="${data.avatar_url}">
console.log(${data.avatar_url});

## GitHub Email
${data.email}`
}

module.exports = generateMarkdown;
