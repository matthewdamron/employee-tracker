const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const { viewAllEmployees } = require('./utils/view');

// const ViewClass = require('./utils/viewClass');
// const viewclass = new ViewClass();

// Create mysql connection
const connection = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'employee-tracker',
    password: 'n~K#!,mKl$L8>@*<RXcz',
    database: 'employees_db'
});

// Start mysql connection
connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected as id ' + connection.threadId + '\n');
    startApp();
});

function startApp() {
    inquirer.prompt ([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: [
                'View',
                'Add',
                'Update',
                'Remove',
                'Exit App'
            ]
        }
    ]).then(function(res) {
        switch (res.choice) {
            case 'View':
                inquirer.prompt ([
                    {
                        type: 'list',
                        message: 'How would you like to view the employees?',
                        name: 'choice',
                        choices: [
                            'view test',
                            'View All Employees',
                            `View Employee's By Deparments`,
                            `View Employee's By Managers`,
                            `View Employee's By Roles`,
                            'Go Back'
                        ]
                    }
                ]).then(function(res) {
                    switch (res.choice) {
                        case 'view test':
                            viewclass.initializeViews(connection);
                            break;

                        case 'View All Employees':
                            // viewAllEmployees(connection);
                            const test = viewAllEmployees(connection);
                            test.then(function(results) {
                                console.table(results);
                                startApp();
                                })
                            // console.log(test);
                            // startApp();
                            break;
                        
                        case `View Employee's By Deparments`:
                            viewByDeparments();
                            break;

                        case `View Employee's By Managers`:
                            viewByManagers();
                            break;
                        
                        case `View Employee's By Roles`:
                            viewByRoles();
                            break;
                    
                        case 'Go Back':
                            startApp();
                            break;
                    }
                })                
                break;

            case 'Add':
                inquirer.prompt ([
                    {
                        type: 'list',
                        message: 'What would you like to add?',
                        name: 'choice',
                        choices: [
                            'Add Employee',
                            'Add Department',
                            'Add Role',
                            'Go Back'
                        ]
                    }
                ]).then(function(res) {
                    switch (res.choice) {
                        case 'Add Employee':
                            addEmployee();
                            break;

                        case 'Add Department':
                            addDepartment();
                            break;

                        case 'Add Role':
                            addRole();
                            break;
                    
                        case 'Go Back':
                            startApp();
                            break;
                    }
                })
                break;
            
            case 'Update':
                inquirer.prompt ([
                    {
                        type: 'list',
                        message: 'What would you like to update?',
                        name: 'choice',
                        choices: [
                            'Update Employee Role',
                            'Update Employee Manager',
                            'Go Back'
                        ]
                    }
                ]).then(function(res) {
                    switch (res.choice) {
                        case 'Update Employee Role':
                            updateRole();
                            break;

                        case 'Update Employee Manager':
                            updateManager();
                            break;
                    
                        case 'Go Back':
                            startApp();
                            break;
                    }
                })
                break;

            case 'Remove':
                inquirer.prompt ([
                    {
                        type: 'list',
                        message: 'What would you like to remove?',
                        name: 'choice',
                        choices: [
                            'Remove Employee',
                            'Remove Department',
                            'Remove Role',
                            'Go Back'
                        ]
                    }
                ]).then(function(res) {
                    switch (res.choice) {
                        case 'Remove Employee':
                            removeEmployee();
                            break;

                        case 'Remove Department':
                            removeDepartment();
                            break;

                        case 'Remove Role':
                            removeRole();
                            break;
                    
                        case 'Go Back':
                            startApp();
                            break;
                    }
                })
                break;
            case 'Exit App':
                connection.end();
                break;
        }
    })
};

// const viewclass = new ViewClass();

// const viewAllEmployees = (connection) => {
//     connection.query(
//         `SELECT
//             employees.id AS 'ID',
//             employees.first_name AS 'First Name',
//             employees.last_name AS 'Last Name',
//             roles.title AS 'Title',
//             roles.salary AS 'Salary',
//             departments.department_name AS 'Department',
//             CONCAT(e.first_name, ' ', e.last_name) AS 'Manager'
//         FROM employees
//         INNER JOIN roles ON roles.id = employees.role_id
//         INNER JOIN departments ON departments.id = roles.department_id
//         LEFT JOIN employees e ON employees.manager_id = e.id;`,
//         function (err, res) {
//             if (err) throw err
//             console.log('\n');
//             console.table(res);
//             startApp();
//             // return true;
//         }
//     )
// };