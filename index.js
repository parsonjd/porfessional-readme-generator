
//Packages and file required
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/generateMarkdown.js');

//List of questions to ask user
const questions = [
    {
        type: 'input',
        message: 'Project name: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
    },

    {
        type: 'input',
        message: 'Explain how users can contribute to your project.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide tests for your project.',
        name: 'test',
    },

    {
        type: 'list',
        message: 'Choose your license for your project.',
        name: 'license',
        choices: ['MIT', 'ISC', 'Apache', 'GPL', 'BSD', 'None'],

    },

    {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your email: ",
        name: "email",
    }

]

// Writes users responses to file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, (data))
        console.log("Your Professional Readme is generated!")
    }
    catch {
        console.log('Something went wrong!')
    }
}

// Initializes the app
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        let data = JSON.stringify(response)
        writeToFile(`${response.title}.md`, data);
    });
}

//Starts upon load or refresh
init();
