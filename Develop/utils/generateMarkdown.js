// packages for the application
const inquirer = require("inquirer");
const fs = require("fs");
const index = require("../index.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === 'Apache 2.0') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GPL v3.0') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// change back to data if needed ${renderLicenseLink(answer.license)} ${renderLicenseSection(answer.license)}
function generateMarkdown(answer) {
  return `
  # ${answer.title}
  ${renderLicenseBadge(answer.license)} 

  ${answer.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Collaborators](#collaborators)
  - [License](#license)
  - [Testing](#test)
  - [Contact me](#contact)

  ## Installation

  ${answer.installation}

  ## Usage

  ${answer.usage}

  ## Collaborators

  ${answer.collaborators}

  ## License

  ${answer.license}

  ## Test

  ${answer.tests}

  ## Contact

  All questions will be answered, choose one or both options:

  - Github: ${answer.github}
  - Email: ${answer.email}

`;
}

module.exports = generateMarkdown;
