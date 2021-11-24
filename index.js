const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateContent = require('./src/generate-content');
const writeFile = require('./utils/write-file');

let employees = [];

function getEmployeePrompts(employeeType) {
    const prompts = [
        {
            type: 'input',
            name: 'name',
            message: "What's their name?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What's their email?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What's their employee ID?"
        }
    ]
    return prompts;
};

function createEmployee(employeeType, employeeDetails) {

    // get the shared attributes
    const name = employeeDetails.name;
    const email = employeeDetails.email;
    const id = employeeDetails.id;

    // create the relevant object and store it on the team.
    switch(employeeType){
        case 'engineer':
            const engineer = new Engineer(name, email);
            employees.push(engineer);
            break;
        case 'manager':
            const manager = new Manager(name, email, id);
            employees.push(manager);
            break;
        case 'intern':
            const intern = new Intern(name, email, id);
            employees.push(intern);
            break;
        default:
            break;
    }
    console.log(`The ${employeeType} ${name} was added`)
}
