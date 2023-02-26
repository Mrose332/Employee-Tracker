const mysql = require('mysql2');

const inquirer = require('inquirer');

const cTable = require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_db',
    password: 'Tigers32!',
  });

  
  connection.connect(function (err) {
    if (err) throw err;
  });

const startQuestions = [
  {
  type: "list",
  name: "start",
  message: "Please choose option?",
  choices:
      [
        { name: 'View Roles', value: 'view-roles' },
        { name: 'View Employees', value: 'view-employees' },
        { name: 'View Deparments', value: 'view-department' },
        { name: 'Add Employee', value: 'add-employee' },
        { name: 'Add Department', value: 'add-department' },
        { name: 'Add Role', value: 'add-role' },

      ]
  }
];

const addDepartment = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "addDept",
				message: "What department do you want to add?",
			},
		])
		.then(({ addDept }) => {
			connection.query(
				`INSERT INTO department (name)
                  VALUES (?)`,
				[addDept],
				(err) => {
					if (err) throw err;
					console.log("Added " + addDept + " to departments!");
				}
			);
		});
};

const addEmployee = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "first_name",
				message: "Enter employee first name:",
			},

      {
				type: "input",
				name: "last_name",
				message: "Enter employee last name:",
			},
		])
		.then(({ addRole }) => {
			connection.query(
				`INSERT INTO role (first_name,last_name)
                  VALUES (?,?)`,
				[addRole],
				(err) => {
					if (err) throw err;
					console.log("Added " + addEmployee + " to Employee!");
				}
			);
		});
};



inquirer
.prompt(startQuestions)
.then(({ start }) => {
 if(start === 'view-roles') {
 // simple que
connection.query(
  'SELECT * FROM `role`', 
  function(err, results,) {
    console.table(results); // results contains rows returned by server
   
  })
}else if(start==='add-department'){
  addDepartment();
}});