// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
var fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Why did you create this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use here',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which one of these licenses did you use?',
        choices: ['MIT', 'Apache', 'Unlicense', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other users contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests and how to run them here',
    },
    {
        type: 'input',
        name: 'question',
        message: 'Provide a way for others to contact you with questions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
