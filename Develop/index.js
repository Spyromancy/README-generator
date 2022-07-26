// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')

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
        message: 'Include a screenshot? (will look for ./assets/images/sreenshot.png',
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
        message: 'How can someone test your project?',
        validate: textInput => {
            if (textInput){
                return true;
            } else {
                console.log('Please explain how to test the code!');
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
        message: 'Please select a license',
        choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Apache 2.0', 'Unlicense', 'BSL 1.0', 'MPL 2.0'],
        when: ({confirmLicense}) => confirmLicense,
    },
    // GitHub username
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username: ',
        validate: textInput => {
            if (textInput){
                return true;
            } else {
                console.log('Please enter your username!');
                return false;
            }
        },
    },
    // Email address
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address: ',
        validate: textInput => {
            if (textInput){
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve,reject) =>{
        fs.writeFile('./output/README.md',data, err => {
            if(err) {
                reject(err);
                return;
            }
            
            resolve({
                ok:true,
                message: 'README created!'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers =>{
            return generateMarkdown(answers);
        })
        .then(markdown =>{
            return writeToFile(markdown);
        })
        .then(writeToFileResponse =>{
            console.log(writeToFileResponse);
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init(); // innit bruv, u wanna 'ave a go