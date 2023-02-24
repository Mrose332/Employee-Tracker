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
  Tracker();
});

  const start = [
    {
    type: "list",
    name: "start",
    message: "Please choose option?",
    choices: 
        [
        "View all Employees",
        "Add Employee",
        "Update an Employee Role",
        "View all Roles",
        "Add Role",
        "Add Department",
        "Done",
        ]
    }
];

const Department = [
  {
  type: "list",
  name: "department",
  message: "Pleae choose Deparmeny options?",
  choices: 
      [
      "View all Departments",
      "Add a Department",
      "Remove a Department",
      "Done",    
      ]
  }
];    



var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });