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
        { name: 'View Roles', value: 'vad' },
        { name: 'View Employees', value: 'vae' },
        { name: 'View Deparments', value: 'var' },
        { name: 'Done', value: 'var' },
      ]
  }
];

const RolesQ = [
  {
  type: "list",
  name: "roles",
  message: "Please choose Role options?",
  choices: 
      [
      "View all Roles",
      "Add a Role",
      "Delete a Role",
      "Done",    
      ]
  }
];  


const DepartmentQ = [
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

const EmployeesQ = [
  {
  type: "list",
  name: "employees",
  message: "Pleae choose Employee options?",
  choices: 
      [
      "View all Employees",
      "Add an Employee",
      "Delete an Employee",
      "Done",    
      ]
  }
];    



inquirer
.prompt(startQuestions)
.then(({ start }) => {
 if(start === 'View Roles') {
   inquirer.prompt(RolesQ)
     .then(employeeAnswer => console.log(employeeAnswer))
 }
 else if(start === 'View Employees') {
  inquirer.prompt(EmployeesQ)
    .then(employeeAnswer => console.log(employeeAnswer))
}
else if(start === 'View Departments') {
  inquirer.prompt(DepartmentsQ)
    .then(employeeAnswer => console.log(employeeAnswer))
}
})
if (err) {throw err;}
      else {
      startQuestions();
    }



    inquirer
    .prompt(DepartmentQ)
    .then(({ department }) => {
     if(department === 'View all Departments') {
       inquirer.prompt()
         .then(employeeAnswer => console.log(employeeAnswer))
     }
     else if(department === 'Add a Department') {
      inquirer.prompt(addDepartment)
        .then(employeeAnswer => console.log(employeeAnswer))
    }
    else if(department === 'Delete a Department') {
      inquirer.prompt()
        .then(employeeAnswer => console.log(employeeAnswer))
    }
    })
    if (err) {throw err;}
          else {
          startQuestions();
        }


        inquirer
    .prompt(RolesQ)
    .then(({ roles }) => {
     if(roles === 'View all Roles') {
       inquirer.prompt()
         .then(employeeAnswer => console.log(employeeAnswer))
     }
     else if(roles === 'Add a Role') {
      inquirer.prompt(addRole)
        .then(employeeAnswer => console.log(employeeAnswer))
    }
    else if(roles === 'Delete a Role') {
      inquirer.prompt()
        .then(employeeAnswer => console.log(employeeAnswer))
    }
    })
    if (err) {throw err;}
          else {
          startQuestions();
        }


        inquirer
        .prompt(EmployeesQ)
        .then(({ employees }) => {
         if(employees === 'View all Employees') {
           inquirer.prompt()
             .then(employeeAnswer => console.log(employeeAnswer))
         }
         else if(employees=== 'Add an Employee') {
          inquirer.prompt(addEmployee)
            .then(employeeAnswer => console.log(employeeAnswer))
        }
        else if(employees === 'Delete an Employee') {
          inquirer.prompt()
            .then(employeeAnswer => console.log(employeeAnswer))
        }
        })
        if (err) {throw err;}
              else {
              startQuestions();
            } 


            const addRole = [{
              type: 'input',
              name: 'newRole',
              message: 'Enter name of new Role?',

            }, {
              type: 'input',
              name: 'NewRoleSalary',
              message: 'Enter the salary amount for the new role:',

            }, {
              type: 'input',
              name: 'NewDepartmentId',
              message: 'Enter the department ID for the new role:'

             }
            ]; 
            
            
            const addDepartment = [{
              type: 'input',
              name: 'newDepartment',
              message: 'Enter name of new department?'

              
            }
            ]; 
            
            
            const addEmployee = [{
              type: 'input',
              name: 'first_name',
              message: 'What is the first name of the employee?'
            }, {
              type: 'input',
              name: 'last_name',
              message: 'What is the last name of the employee?'
             
            }, {
              type: 'input',
              name: 'NewRoleId',
              message: 'Enter the new employee Id'

            }, {
              type: 'input',
              name: 'NewManagerId',
              message: "Please enter the manager's ID number:",

             } 
              
            ];
            