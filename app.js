const inguirer = require('inquirer');
const mysql2 = require('mysql2');
const consoleTable = require('console.table');
const inquirer = require('inquirer');

// Create mysql connection
const connection = mysql2.createConnection ({
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
                'Remove'
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
                            'View All Employees',
                            `View Employee's By Deparment`,
                            `View Employee's By Manager`,
                            `View Employee's By Role`,
                            'Back'
                        ]
                    }
                ]).then(function(res) {
                    switch (res.choice) {
                        case value:
                            
                            break;
                    
                        default:
                            break;
                    }
                })
                
                break;
        
            default:
                break;
        }
    })
};