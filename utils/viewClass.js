const inquirer = require('inquirer');

class ViewClass {
    constructor() {}
    initializeViews(connection) {
        inquirer.prompt([{
            type: 'list',
            message: 'How would you like to view the employees?',
            name: 'choice',
            choices: [
                'View All Employees',
                `View Employee's By Deparments`,
                `View Employee's By Managers`,
                `View Employee's By Roles`,
                'Go Back'
            ]
        }]).then(function (res) {
            switch (res.choice) {
                case 'View All Employees':
                    // viewAllEmployees(connection);
                    viewAllEmployees(connection);
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
    };
    viewAllEmployees = (connection) => {
        let sql =
            `SELECT
                employees.id AS 'ID',
                employees.first_name AS 'First Name',
                employees.last_name AS 'Last Name',
                roles.title AS 'Title',
                roles.salary AS 'Salary',
                departments.department_name AS 'Department',
                CONCAT(e.first_name, ' ', e.last_name) AS 'Manager'
            FROM employees
            INNER JOIN roles ON roles.id = employees.role_id
            INNER JOIN departments ON departments.id = roles.department_id
            LEFT JOIN employees e ON employees.manager_id = e.id;`;

        connection.query(sql, function (err, results) {
            if (err) throw err;
            console.table(results);
        });
        // .then(([rows, fields]) => {
        //     // let test = rows;
        //     // return rows;
        //     console.table(rows);
        // });
        // return json(res);
        // });
        // value.then(function (results) {
        //     return results;
        // })
        // return value;
    };
}