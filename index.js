const mysql = require('mysql2');

const inquirer = require('inquirer');

const cTable = require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_tracker',
    password: 'Tigers32!',
  });

  
connection.connect(function(err) {
  if (err) throw err;
  console.log("T")
  Start();
});

const startQuestions = [
  {
  type: "list",
  name: "start",
  message: "Please choose option?",
  choices:
      [
        { name: 'View All Roles', value: 'vad' },
        { name: 'View All Employees', value: 'vae' },
        { name: 'View All Roles', value: 'var' },
        { name: 'Add an Employee', value: 'add-employee' },
      ]
  }
];

const Department = [
  {
  type: "list",
  name: "department",
  message: "Pleae choose Deparment options?",
  choices: 
      [
      "View all Departments",
      "Add a Department",
      "Remove a Department",
      "Done",    
      ]
  }
];    

const addEmployeeQuestions = [{
  type: 'input',
  name: 'first_name',
  message: 'What is the first name of the employee?'
}, {
  type: 'input',
  name: 'last_name',
  message: 'What is the last name of the employee?' 
}];



