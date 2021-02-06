const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

// Global values
const roleArray = [];
const managersArray = [];
const departmentArray = [];

// Requirements for viewing
const {
    viewAllEmployees,
    viewByDeparments,
    viewByManagers,
    viewByRoles,
    viewAllDeparments,
    viewAllRoles } = require('./utils/view')
;

// Requirements for adding
// const {
//     addEmployee,
//     addDepartment,
//     addRole } = require('./utils/add')
// ;

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
                            viewAllEmployees(connection)
                                .then(([rows]) => {
                                    console.log('\n');
                                    console.table(rows);
                                    startApp();
                                });
                            break;
                        
                        case `View All Employee's By Deparments`:
                            viewByDeparments(connection)
                                .then(([rows]) => {
                                    console.log('\n');
                                    console.table(rows);
                                    startApp();
                                });
                            break;

                        case `View All Employee's By Managers`:
                            viewByManagers(connection)
                                .then(([rows]) => {
                                    console.log('\n');
                                    console.table(rows);
                                    startApp();
                                });
                            break;
                        
                        case `View All Employee's By Roles`:
                            viewByRoles(connection)
                                .then(([rows]) => {
                                    console.log('\n');
                                    console.table(rows);
                                    startApp();
                            });
                            break;

                        case `View All Deparments`:
                            viewAllDeparments(connection)
                                .then(([rows]) => {
                                    console.log('\n');
                                    console.table(rows);
                                    startApp();
                            });
                            break;

                        case `View All Roles`:
                            viewAllRoles(connection)
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

// Pull all current Role positions
function selectRole() {
    connection.query('SELECT * FROM roles', function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
            roleArray.push(res[i].title);
        }
    });
    return roleArray;
};

// Pull all current Manager positions
function selectManager() {
    connection.query('SELECT first_name, last_name FROM employees WHERE manager_id IS NULL', function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
            managersArray.push(res[i].first_name + ' ' + res[i].last_name);
        }
    });
    return managersArray;
};

// Pull all current Manager positions
function selectDepartment() {
    connection.query('SELECT * FROM departments', function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
            departmentArray.push(res[i].department_name);
        }
    });
    return departmentArray;
};

// Add Employee Function
function addEmployee() {
    inquirer.prompt([
        {
            name: 'firstname',
            type: 'input',
            message: 'Enter their first name:'
        },
        {
            name: 'lastname',
            type: 'input',
            message: 'Enter their last name:'
        },
        {
            name: 'role',
            type: 'list',
            message: 'What is their role?',
            choices: selectRole()
        },
        {
            name: 'manager',
            type: 'list',
            message: 'Whats their managers name?',
            choices: selectManager()
        }
    ]).then(function (res) {
        let roleId = selectRole().indexOf(res.role) + 1;
        let managerId = selectManager().indexOf(res.manager) + 1;
        connection.query('INSERT INTO employees SET ?',
        {
            first_name: res.firstname,
            last_name: res.lastname,
            manager_id: managerId,
            role_id: roleId
        }, 
        function(err){
            if (err) throw err;
            console.log('\n Your Employee has been successfully added!\n');
            startApp();
        });
    });
};

// Add Department Function
function addDepartment() { 
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What Department would you like to add?'
        }
    ]).then(function(res) {
        connection.query('INSERT INTO departments SET ? ',
        {
            department_name: res.name
        },
        function(err) {
            if (err) throw err
            console.table(res);
            startApp();
        });
    });
};

// Add Role Function
function addRole() { 
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What Role would you like to add?'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the Salary for this role?'
        },
        {
            name: 'department',
            type: 'list',
            message: 'Whats Department is this Role for?',
            choices: selectDepartment()
        }
    ]).then(function(res) {
        let roleId = selectDepartment().indexOf(res.department) + 1;
        connection.query('INSERT INTO roles SET ? ',
        {
            title: res.title,
            salary: res.salary,
            department_id: roleId
        },
        function(err) {
            if (err) throw err
            console.table(res);
            startApp();
        });
    });
};

