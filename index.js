const handleManager = require('./handleManager');
const inquirer = require('inquirer');
const fs = require('fs');
const { title, exit } = require('process');
var card;

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    var licenseInf = generateMD.Markdown(answers);
    answers.Link = licenseInf[0];
    answers.Badge = licenseInf[1];
    console.log(answers);
    fs.writeFileSync(fileName.toUpperCase()+'.md', generateReadme(answers))
}

function handleMain(answers){
    if( answers.create_team = 'Continue'){
        handleManager.ManagerMenu(answers);
    }
    else {exit}
}

// Use writeFileSync method to use promises instead of a callback function

const MainPrompt = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'fileName',
        message: 'Welcome to Team Chart Generator app, to start the process\n Please choose a name for your Team : ',
    },
    {
        type: 'rawlist',
        name: 'create_team',
        message: 'To create you team you need to add the information of the manager of the team , please choose one of the information below : ',
        choices: ['Continue','Exit']
    }
  ]);
};

const generateReadme = ({ title,Description,github,installation,usage,credits,license,tests,questions,Screenshot,Badge,Link}) =>
`
${title!=''?'# '+title:''}

${Description!=''?'## Description \n'+ Description:''}


${github!=''?'## github link \n'+ github: ''}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## installation
${installation}

## usage
${usage}
    ## screenshot
    ![alt text](${Screenshot})
 
## credits
${credits}

## license

${Badge!='undefined'?'# '+Badge:'none'}
${Link!='undefined'?'# '+Link:'none'}


## tests
${tests}

## questions
- Please send me email if you had any questions, my email address is :\n ${questions}

`;

// TODO: Create a function to initialize app
const init = () => {
    console.clear();
    MainPrompt()
      .then((answers) => handleMain(answers))
    //   .then(() => {
    //                 console.clear();
    //                 console.log(`Successfully wrote to file`);
    //               })
      .catch((err) => console.error(err));
  };
// Function call to initialize app
init(); 