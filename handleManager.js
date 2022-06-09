const Employee = require('./handleEmployee');
const createCard = require('./createCard');
const inquirer = require('inquirer');
const { title, exit } = require('process');

var card='';

function handleManager(answers){
    if( answers.Continue === 'Continue'){
        answers.position = 'Manager';
        card += createCard.generateCard(answers);
        console.log(card);
        Employee.EmployeeMenue(answers,card);
        return card;
    }
    else {exit}
}

const ManagerPrompt = () => {
  return inquirer.prompt([
    {
        //name,ID, email, office_number
        type: 'input',
        name: 'name',
        message: 'Welcome to Team Chart Generator app, to start the process\n Please enter the team manager`s name : ',
    },
    {
        type: 'input',
        name: 'ID',
        message: 'Enter employee ID : ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
    },
    {
        type: 'input',
        name: 'office_number',
        message: 'Enter office number : ',
    },
    {
        type: 'rawlist',
        name: 'Continue',
        message: 'Do you want to enter the rest of your group information? , please choose one of the information below : ',
        choices: ['Continue','Exit(it is not going to create your chart)']
    }
  ]);
};
function ManagerMenu(answers){
        console.clear();
        ManagerPrompt()
            .then((answers) => handleManager(answers))
            .catch((err) => console.error(err));
}
module.exports = {
    ManagerMenu
  }