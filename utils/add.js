const inquirer = require('inquirer');
const roleArray = [];
var managersArray = [];

// Pull all current Role positions
function selectRole(connection) {
    connection.query('SELECT * FROM roles', function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
            roleArray.push(res[i].title);
        }
    });
    return roleArray;
};

// Pull all current Manager positions
function selectManager(connection) {
    connection.query('SELECT first_name, last_name FROM employees WHERE manager_id IS NULL', function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
            managersArray.push(res[i].first_name + ' ' + res[i].last_name);
        }
    });
    return managersArray;
};

const addEmployee = (connection) => {
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
            choices: selectRole(connection)
        },
        {
            name: 'manager',
            type: 'list',
            message: 'Whats their managers name?',
            choices: selectManager(connection)
        }
    ]).then(function (res) {
        let roleId = selectRole(connection).indexOf(res.role) + 1;
        let managerId = selectManager(connection).indexOf(res.manager) + 1;
        connection.query('INSERT INTO employees SET ?',
        {
            first_name: res.firstname,
            last_name: res.lastname,
            manager_id: managerId,
            role_id: roleId
        }, 
        function(err){
            if (err) throw err;
            console.log('\n Your Employee has been successfully added!');
        });
    });
};

module.exports = {
    addEmployee
    // addDepartment,
    // addRole
};