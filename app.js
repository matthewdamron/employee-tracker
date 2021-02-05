const inguirer = require('inquirer');
const mysql2 = require('mysql2');
const consoleTable = require('console.table');

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
    // startApp();

    connection.end();
});