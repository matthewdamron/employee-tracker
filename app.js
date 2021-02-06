const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const {
    viewAllEmployees,
    viewByDeparments,
    viewByManagers,
    viewByRoles,
    viewAllDeparments,
    viewAllRoles } = require('./utils/view');

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

            // ---- VIEW ----
            case 'View':
                inquirer.prompt ([
                    {
                        type: 'list',
                        message: 'How would you like to view the employees?',
                        name: 'choice',
                        choices: [
                            'View All Employees',
                            `View All Employee's By Deparments`,
                            `View All Employee's By Managers`,
                            `View All Employee's By Roles`,
                            'View All Deparments',
                            'View All Roles',
                            'Go Back'
                        ]
                    }
                ]).then(function(res) {
                    switch (res.choice) {
                         case 'View All Employees':
                            viewAllEmployeesPromise = viewAllEmployees(connection)
                                .then(([rows]) => {
                                    console.log('\n');
                                    console.table(rows);
                                    startApp();
                                });
                            break;
                        
                        case `View All Employee's By Deparments`:
                            viewByDepartmentPromise = viewByDeparments(connection)
                                .then(([rows]) => {
                                    console.log('\n');
                                    console.table(rows);
                                    startApp();
                                });
                            break;

                        case `View All Employee's By Managers`:
                            viewByManagerPromis = viewByManagers(connection)
                                .then(([rows]) => {
                                    console.log('\n');
                                    console.table(rows);
                                    startApp();
                                });
                            break;
                        
                        case `View All Employee's By Roles`:
                            viewByRolePromise = viewByRoles(connection)
                                .then(([rows]) => {
                                    console.log('\n');
                                    console.table(rows);
                                    startApp();
                            });
                            break;

                        case `View All Deparments`:
                            viewAllDeparmentsPromise = viewAllDeparments(connection)
                                .then(([rows]) => {
                                    console.log('\n');
                                    console.table(rows);
                                    startApp();
                            });
                            break;

                        case `View All Roles`:
                            viewAllRolesPromise = viewAllRoles(connection)
                                .then(([rows]) => {
                                    console.log('\n');
                                    console.table(rows);
                                    startApp();
                            });
                            break;
                    
                        case 'Go Back':
                            startApp();
                            break;
                    }
                })                
                break;

            // ---- ADD ----
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
            
            // ---- UPDATE ----
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

            // ---- REMOVE ----
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

            // ---- EXIT APP ----
            case 'Exit App':
                connection.end();
                break;
        }
    })
};