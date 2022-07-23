// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require('fs')

const { generateMarkdown } = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    // Project Name
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title? (required)",
        validate: textInput => {
            if (textInput){
                return true;
            } else {
                console.log('Please enter the title!');
                return false;
            }
        },
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the project: (required)',
        validate: textInput => {
            if (textInput){
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        },
    },
    // Installation
    {
        type: 'input',
        name: 'install',
        message: 'How can someone install your project?',
        validate: textInput => {
            if (textInput){
                return true;
            } else {
                console.log('Please describe how to install your application!');
                return false;
            }
        },
    },
    // Include a screenshot?
    {
        type: 'confirm',
        name: 'screenshot',
        message: 'Include a screenshot?',
        default: true
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project meant to be used?',
        validate: textInput => {
            if (textInput){
                return true;
            } else {
                console.log('Please describe how to use your project!');
                return false;
            }
        },
    },
    // Contribution
    {
        type: 'input',
        name: 'contribute',
        message: 'How can people contribute to the project, if at all?',
        validate: textInput => {
            if (textInput){
                return true;
            } else {
                console.log("Please explain how to contribute, or state that you don't want outside contributions.");
                return false;
            }
        },
    },
    // Test instructions
    {
        type: 'input',
        name: 'test',
        message: 'a',
        validate: textInput => {
            if (textInput){
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        },
    },
    // License?
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to include a license?',
        default: false
    },
    // License type
    {
        type: 'list',
        name: 'license',
        message: 'a',
        choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Apache 2.0', 'Unlicense', 'BSL 1.0', 'MPL 2.0'],
        when: ({confirmLicense}) => confirmLicense,
        filter(answer) { // format answer to match
            var formatted = answer.toLowerCase().replaceAll(" ","-"); // Apache 2.0 -> apache-2.0
            if(formatted.substring(0,3)==='GNU'){
                formatted= formatted.substring(4,formatted.length-2)+'-3.0';
            }
        }
    },
    // GitHub username
    {
        type: 'input',
        name: 'github',
        message: 'a',
        validate: textInput => {
            if (textInput){
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        },
    },
    // Email address
    {
        type: 'input',
        name: 'email',
        message: 'a',
        validate: textInput => {
            if (textInput){
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(); // innit bruv, u wanna 'ave a go


/*

GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with
    the title of my project and sections entitled:
        Description 
        Table of Contents
        Installation
        Usage,
        License,
        Contributing 
        Tests
        Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README


*/