const r2f = require('./writeToFile');
const createCard = require('./createCard');
const inquirer = require('inquirer');
const { title, exit } = require('process');

var newCard,newFileName;

function handleEmployee(filename,answers){
    //console.log(filename);
    newCard+=createCard.generateCard(answers);
    if( answers.Continue === 'Continue'){
        console.log('line 11',newCard);
        EmployeePrompt()
            .then((canswers) => handleEmployee(filename,canswers))
            .catch((err) => console.error(err));
        ;
    } 
    else {
        console.log('this',newCard);
        r2f.write2file(filename,newCard);
        return newCard;
    }
}

const EmployeePrompt = () => {
  return inquirer.prompt([
    {
        //team manager’s name, employee ID, email address, and office number
        type: 'input',
        name: 'name',
        message: 'Welcome to the employee menue,to start the process\n Please enter your employee name : ',
    },
    {
        type: 'rawlist',
        name: 'position',
        message: 'Please enter the position of your employee : ',
        choices: ['Engineer','Intern']
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
        name: 'github',
        message: 'Please enter his/her GitHub account : ',
    },
    {
        type: 'rawlist',
        name: 'Continue',
        message: 'Do you want to enter another employee? , \nPlease choose one of the information below : ',
        choices: ['Continue','Exit(it is going to create your chart!)']
    }
  ]);
};
function EmployeeMenue(m_answers,card,filename){
        console.clear();
        newCard = card;
        EmployeePrompt()
            .then((answers) => handleEmployee(filename,answers))
            // .then(exit)
            .catch((err) => console.error(err));
}
module.exports = {
    handleEmployee,
    EmployeeMenue
  }