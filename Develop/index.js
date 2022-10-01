// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {   // Title
        type: "input",
        name: "title",
        message: "What is the title of the project?",
        validate: inputTitle => {
            if(inputTitle) {
                return true;
            } else{
                console.log("A title is required to continue.")
                return false;
            }
        }
    }, 
    {   // Description
        type: "input",
        name: "description",
        message: "Provide a description explaining the what, why, and how of your project:",
        validate: inputDescription => {
            if(inputDescription) {
                return true;
            } else{
                console.log("A description is required to continue.")
                return false;
            }
        }
    },
    {   // Installation
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?\n Provide a step-by-step description:",
        validate: inputInstallation => {
            if(inputInstallation) {
                return true;
            }else {
                console.log("Installation steps are required to continue.")
                return false;
            }
        }
    },
    { // Usage or Screenshot display
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed use the provided syntax:\n ![alt text](assets/images/screenshot.png)",
        validate: inputUsage => {
            if(inputUsage) {
                return true;
            }else {
                console.log("Project usage steps are required to continue.")
                return false;
            }
        }
    },
    { // Collaborators
        type: "input",
        name: "collaborators",
        message: "Provide instructions and examples for use. Include screenshots as needed use the provided syntax:\n ![alt text](assets/images/screenshot.png)",
        validate: inputUsage => {
            if(inputUsage) {
                return true;
            }else {
                console.log("Project usage steps are required to continue.")
                return false;
            }
        }
    },
    { // License
        type: "checkbox",
        name: "license",
        message: "Select a license for you project:",
        choices: ["MIT", "GPL v3.0", "Apache 2.0", "None"],
        validate: inputLicense => {
            if(inputLicense) {
                return true;
            }else {
                console.log("Select one of the four options to continue.")
                return false;
            }
        }
    },
    { // Testing
        type: "input",
        name: "tests",
        message: "How do you test your prject?",
        validate: inputTests => {
            if(inputTests) {
                return true;
            }else {
                console.log("Describe the testing process of the project to continue.")
                return false;
            }
        }
    },
    { // Github
        type: "input",
        name: "github",
        message: "Enter your Github username",
        validate: inputGithub => {
            if(inputGithub) {
                return true;
            }else {
                console.log("Github username is required to continue.")
                return false;
            }
        }
    },
    { // 
        type: "input",
        name: "email",
        message: "Enter your email for a secondary form of contact (optional)",
        // validate: input => {
        //     if(input) {
        //         return true;
        //     }else {
        //         console.log("Project usage steps are required to continue.")
        //         return false;
        //     }
        // }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
