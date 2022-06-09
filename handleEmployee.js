const createCard = require('./createCard');
const inquirer = require('inquirer');
const { title, exit } = require('process');

function handleEmployee(answers,card){
    if( answers.Continue = 'Continue'){
        card+=createCard.generateCard(answers);
        //newUser(card);
        EmployeeMenue(answers,card);
        console.log(card);
        return card;
    }
    else {
        return card;
    }
}

const EmployeePrompt = () => {
  return inquirer.prompt([
    {
        //team manager’s name, employee ID, email address, and office number
        type: 'input',
        name: 'name',
        message: 'Welcome to Team Chart Generator app, to start the process\n Please choose a name for your Team : ',
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
function EmployeeMenue(answers,card){
        // console.clear();
        EmployeePrompt()
            .then((answers) => handleEmployee(answers,card))
            // .then(exit)
            .catch((err) => console.error(err));

}
module.exports = {
    EmployeeMenue
  }