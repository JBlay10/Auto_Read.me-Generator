// packages for the application
// const inquirer = require("inquirer");
// const fs = require("fs");
// const index = require("../index.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(license === 'MIT') {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === 'Apache 2.0') {
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === 'GPL v3.0') {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else {
    badge = ""
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  if(license === 'MIT') {
    link = "https://choosealicense.com/licenses/mit/"
  } else if (license === 'Apache 2.0') {
    link = "https://opensource.org/licenses/Apache-2.0"
  } else if (license === 'GPL v3.0') {
    link = "https://choosealicense.com/licenses/gpl-3.0/"
  } else {
    link = ""
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = "";
  if(license === "None") {
    section = ""
  } else {
    section = ` ${license}`
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
  # ${answer.title}
  ${renderLicenseBadge(answer.license)}  

  ${answer.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Collaborators](#collaborators)
  - [License](#license-${answer.license})
  - [Testing](#test)
  - [Contact me](#contact)

  ## Installation

  ${answer.installation}

  ## Usage
  <!-- For the screenshots create an "assets/images" folder in your repository and upload your screenshot to it use this syntax: ![alt text](assets/images/screenshot.png) -->

  ${answer.usage}

  ## Collaborators

  ${answer.collaborators}

  ## License${renderLicenseSection(answer.license)}
  ${renderLicenseBadge(answer.license)} 

  [Get a ${answer.license} license here!](${renderLicenseLink(answer.license)})

  ## Test

  ${answer.tests}

  ## Contact

  All questions will be answered, choose one or both options:

  - Github: [${answer.github}](https://github.com/${answer.github})
  - Email: ${answer.email}

`;
}

module.exports = generateMarkdown;
