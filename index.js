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

			{
				type: "input",
				message: "Enter employee's role ID:",
				name: "roleID"
			},
			{
				type: "input",
				message: "Enter employee's manager ID:",
				name: "managerID"
			}
		])
		.then(({ first_name,last_name,role_id,manager_id }) => {
			connection.query(
				`INSERT INTO employee (first_name,last_name,role_id,manager_id)
                  VALUES (?,?,?,?)`,
				[first_name,last_name,role_id,manager_id ],
				(err) => {
					if (err) throw err;
					console.log("Added " + first_name + last_name + role_id + manager_id +" to Employee!");
				}
			);
		});
};



const addRole = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "title",
				message: "Enter new Role:",
			},

      {
				type: "input",
				name: "salary",
				message: "Enter salary for this role:",
			},
		])
		.then(({ title,salary }) => {
			connection.query(
				`INSERT INTO role (title,salary)
                  VALUES (?,?)`,
				[title,salary],
				(err) => {
					if (err) throw err;
					console.log("Added " + title + salary + " to Role!");
          
				}
	
				);
				
		});
		
};



function init() {
	inquirer.prompt(startQuestions).then(({ start }) => {
	  if (start === "view-roles") {
		connection.query("SELECT * FROM `role`", function (err, results) {
		  console.table(results);
		  setTimeout(() => {
			init();
		  }, 200);
		});
	  } else if (start === "add-department") {
		addDepartment();
	  } else if (start === "add-role") {
		addRole();
	  } else if (start === "add-employee") {
		addEmployee();
		
	  } else if (start === "view-employees") {
		connection.query("SELECT * FROM `employee`", function (err, results) {
		  console.table(results);
		});
		setTimeout(() => {
			init();
		  }, 200);
	  } else if (start === "view-department") {
		connection.query("SELECT * FROM `department`", function (err, results) {
		  console.table(results);
		});
		setTimeout(() => {
			init();
		  }, 200);
	  }
	 
	});
  }
  
  init();
